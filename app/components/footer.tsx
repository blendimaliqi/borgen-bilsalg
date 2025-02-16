import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <a
            href="tel:+4712345678"
            className="flex items-center gap-2 text-base md:text-lg text-accent-foreground hover:text-accent-foreground/80 transition-colors"
          >
            <Phone className="h-5 w-5 text-accent-foreground/80" />
            +47 123 45 678
          </a>
          <a
            href="mailto:zulic@borgenbilsalg.no"
            className="flex items-center gap-2 text-base md:text-lg text-accent-foreground hover:text-accent-foreground/80 transition-colors"
          >
            <Mail className="h-5 w-5 text-accent-foreground/80" />
            zulic@borgenbilsalg.no
          </a>
        </div>
        <div className="mt-6 md:mt-4 text-center">
          <p className="text-base md:text-lg text-accent-foreground/90 font-medium">
            © 2024 Borgen Bilsalg
          </p>
        </div>
      </div>
    </footer>
  );
}
