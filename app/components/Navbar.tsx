import Link from "next/link";

export default function Navbar() {
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
            className="text-foreground hover:text-primary transition"
          >
            Hjem
          </Link>
          <Link
            href="/cars"
            className="text-foreground hover:text-primary transition"
          >
            Biler
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-primary transition"
          >
            Om oss
          </Link>
          <Link
            href="#"
            className="text-foreground hover:text-primary transition"
          >
            Kontakt
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/admin/cars"
            className="text-xs text-muted-foreground hover:text-foreground transition"
          >
            Admin
          </Link>
          <Link
            href="https://www.finn.no/mobility/search/car?orgId=4471300"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
          >
            Se på Finn.no
          </Link>
        </div>
      </div>
    </header>
  );
}
