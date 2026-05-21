"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Hjem" },
  { href: "/cars", label: "Biler" },
  { href: "/contact", label: "Kontakt" },
  { href: "/requestcar", label: "Forespør bil" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-[70] border-b border-border/70 bg-background/95 backdrop-blur-xl">
      <div className="page-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="focus-ring group flex min-w-0 items-center gap-3 rounded-md"
            aria-label="Borgen Bilsalg hjem"
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border/70 bg-card">
              <Image
                src="/borgen_logo_nobackground.png"
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Borgen Bilsalg
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">
                Kvalitetsbiler i Sarpsborg
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Hovedmeny">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "focus-ring ease-premium rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 active:translate-y-[1px]",
                  isActive(item.href)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+4798681758"
              className="focus-ring hidden items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:translate-y-[1px] sm:inline-flex"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Ring oss
            </a>
            <Link
              href="/cars"
              className="focus-ring hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px] lg:inline-flex"
            >
              Se biler
            </Link>
            <button
              type="button"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card text-foreground transition-all duration-300 hover:border-primary md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Lukk meny" : "Åpne meny"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-x-0 bottom-0 top-[4.75rem] z-[75] bg-primary/5 md:hidden"
              aria-label="Lukk meny"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              id="mobile-navigation"
              className="fixed left-4 right-4 top-[4.75rem] z-[80] md:hidden"
            >
              <nav className="rounded-lg border border-border bg-card p-2 shadow-[0_24px_50px_-36px_hsl(var(--foreground))]">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "focus-ring flex items-center justify-between rounded-md px-3 py-3 text-sm font-semibold transition-all duration-300",
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border pt-2">
                  <a
                    href="tel:+4798681758"
                    className="focus-ring inline-flex items-center justify-center rounded-md border border-border px-3 py-3 text-sm font-semibold text-foreground"
                  >
                    Ring
                  </a>
                  <Link
                    href="/cars"
                    onClick={() => setMobileMenuOpen(false)}
                    className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-3 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    Biler
                  </Link>
                </div>
              </nav>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
