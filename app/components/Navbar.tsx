"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check session storage on component mount
  useEffect(() => {
    const adminAuth = sessionStorage.getItem("adminAuth");
    if (adminAuth === "true") {
      setIsAdmin(true);
    }

    // Add keyboard shortcut listener (Ctrl+Shift+A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        e.preventDefault();
        if (!isAdmin) {
          setShowPrompt(true);
        }
      }
      // Close prompt with Escape
      if (e.key === "Escape" && showPrompt) {
        setShowPrompt(false);
        setPassword("");
        setError("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAdmin, showPrompt]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "mirkish") {
      sessionStorage.setItem("adminAuth", "true");
      setIsAdmin(true);
      setShowPrompt(false);
      setPassword("");
      setError("");
    } else {
      setError("Feil passord. Prøv igjen.");
      setPassword("");
    }
  };

  return (
    <header className="border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl text-primary">
            Borgen Bilsalg
          </Link>
        </div>

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
          {isAdmin && (
            <Link
              href="/admin/cars"
              className={`relative py-1 text-xs transition ${
                pathname === "/admin/cars" || pathname.startsWith("/admin/")
                  ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Admin
            </Link>
          )}
          <Link
            href="/cars"
            className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
          >
            Se våre biler
          </Link>
        </div>
      </div>

      {/* Password Prompt Modal */}
      {showPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Admin Tilgang</h3>
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Passord
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowPrompt(false);
                    setPassword("");
                    setError("");
                  }}
                  className="px-4 py-2 text-sm border border-border rounded-md hover:bg-muted transition-colors"
                >
                  Avbryt
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Logg inn
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}
