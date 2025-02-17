import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[400px] mb-8">
          <iframe
            src="https://maps.google.com/maps?q=59.277174491606935,11.092749118100468&t=k&z=19&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Borgen Bilsalg Location"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=59.277174491606935,11.092749118100468"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 text-white px-6 py-3 rounded hover:bg-black/90 transition-colors"
          >
            Få veibeskrivelse
            <span className="text-xs block text-center">
              (åpnes i Google Maps)
            </span>
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <a
            href="https://www.google.com/maps/search/?api=1&query=59.277174491606935,11.092749118100468"
            className="flex items-center gap-2 text-base md:text-lg text-accent-foreground hover:text-accent-foreground/80 transition-colors"
          >
            <MapPin className="h-5 w-5 text-accent-foreground/80" />
            Industriveien 29, 1725 Sarpsborg
          </a>
          <a
            href="tel:+4712345678"
            className="flex items-center gap-2 text-base md:text-lg text-accent-foreground hover:text-accent-foreground/80 transition-colors"
          >
            <Phone className="h-5 w-5 text-accent-foreground/80" />
            +47 986 81 758
          </a>
          <a
            href="mailto:mirnes@borgenbilsalg.no"
            className="flex items-center gap-2 text-base md:text-lg text-accent-foreground hover:text-accent-foreground/80 transition-colors"
          >
            <Mail className="h-5 w-5 text-accent-foreground/80" />
            mirnes@borgenbilsalg.no
          </a>
        </div>
        <div className="mt-6 md:mt-4 text-center">
          <p className="text-base md:text-lg text-accent-foreground/90 font-medium">
            © {new Date().getFullYear()} Borgen Bilsalg
          </p>
        </div>
      </div>
    </footer>
  );
}
