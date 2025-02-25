"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
  const pathname = usePathname();

  // Add scroll behavior states
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // State for portal container
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  // Check session storage on component mount
  useEffect(() => {
    // Add keyboard shortcut listener for mobile menu
    const handleKeyDown = (e: KeyboardEvent) => {
      // Close mobile menu with Escape
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Add scroll behavior effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make the navbar visible when:
      // 1. Scrolling up
      // 2. At the top of the page
      // 3. Scrolled less than the navbar height (to prevent flickering)
      const isScrollingUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;

      // Don't hide navbar when mobile menu is open
      if (!mobileMenuOpen) {
        setVisible(isScrollingUp || isAtTop);
      }

      setPrevScrollPos(currentScrollPos);
      setIsScrolled(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Set up portal container on mount
  useEffect(() => {
    // Create or get the portal container
    let container = document.getElementById("mobile-menu-portal");
    if (!container) {
      container = document.createElement("div");
      container.id = "mobile-menu-portal";
      document.body.appendChild(container);
    }
    setPortalContainer(container);

    // Clean up on unmount
    return () => {
      if (container && document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  return (
    <header
      className={`border-b border-border fixed top-0 left-0 right-0 z-[100] bg-background transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-primary">
            Borgen Bilsalg
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`relative py-1 transition ${
              pathname === "/"
                ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            Hjem
          </Link>
          <Link
            href="/cars"
            className={`relative py-1 transition ${
              pathname === "/cars" || pathname.startsWith("/cars/")
                ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            Biler
          </Link>
          <Link
            href="/contact"
            className={`relative py-1 transition ${
              pathname === "/contact"
                ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                : "text-foreground hover:text-primary"
            }`}
          >
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cars"
            className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
          >
            Se våre biler
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Implementation - Using Portal */}
      {mobileMenuOpen &&
        portalContainer &&
        createPortal(
          <div className="mobile-menu-container">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black/60 z-[1000] backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            {/* Menu Panel */}
            <div
              className="fixed top-16 right-4 w-[250px] bg-white z-[1001] shadow-xl rounded-xl"
              style={{
                position: "fixed",
                maxHeight: "calc(100vh - 100px)",
                overflowY: "auto",
              }}
            >
              {/* Close Button - Top Right Corner */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-20"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Menu Links */}
              <div className="pt-10 pb-4 px-3 flex flex-col">
                <div>
                  <Link
                    href="/"
                    className={`block py-2 px-3 text-sm font-medium border-l-2 mb-1 ${
                      pathname === "/"
                        ? "border-primary text-primary bg-blue-50/50"
                        : "border-transparent text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hjem
                  </Link>
                  <Link
                    href="/cars"
                    className={`block py-2 px-3 text-sm font-medium border-l-2 mb-1 ${
                      pathname === "/cars" || pathname.startsWith("/cars/")
                        ? "border-primary text-primary bg-blue-50/50"
                        : "border-transparent text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Biler
                  </Link>
                  <Link
                    href="/contact"
                    className={`block py-2 px-3 text-sm font-medium border-l-2 mb-1 ${
                      pathname === "/contact"
                        ? "border-primary text-primary bg-blue-50/50"
                        : "border-transparent text-gray-800 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Kontakt
                  </Link>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <Link
                    href="/cars"
                    className="block w-full py-2 px-3 bg-primary text-white rounded-md hover:bg-primary/90 transition text-center font-medium text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Se våre biler
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          portalContainer
        )}
    </header>
  );
}
