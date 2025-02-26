import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer id="kontakt" className="bg-accent">
      {/* Map section */}
      <div className="relative w-full h-[400px]">
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
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
        >
          Få veibeskrivelse
          <span className="text-xs block text-center mt-1">
            (åpnes i Google Maps)
          </span>
        </a>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and about */}
          <div className="md:col-span-4">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-accent-foreground">
                Borgen Bilsalg
              </h3>
            </div>
            <p className="text-accent-foreground/80 mb-6">
              Din pålitelige partner for kvalitetsbiler i Sarpsborg. Vi tilbyr
              profesjonell service og trygg bilhandel.
            </p>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-accent-foreground mb-6">
              Kontakt Oss
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=59.277174491606935,11.092749118100468"
                  className="flex items-start gap-3 text-accent-foreground/90 hover:text-accent-foreground transition-colors"
                >
                  <MapPin className="h-5 w-5 text-accent-foreground/80 mt-0.5" />
                  <span>Industriveien 29, 1725 Sarpsborg</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+4798681758"
                  className="flex items-center gap-3 text-accent-foreground/90 hover:text-accent-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent-foreground/80" />
                  +47 986 81 758
                </a>
              </li>
              <li>
                <a
                  href="mailto:mirnes@borgenbilsalg.no"
                  className="flex items-center gap-3 text-accent-foreground/90 hover:text-accent-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent-foreground/80" />
                  mirnes@borgenbilsalg.no
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold text-accent-foreground mb-6">
              Åpningstider
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-accent-foreground/90">
                <Clock className="h-5 w-5 text-accent-foreground/80 mt-0.5" />
                <div>
                  <p className="font-medium">Mandag - Fredag</p>
                  <p>10:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-accent-foreground/90 pl-8">
                <div>
                  <p className="font-medium">Lørdag</p>
                  <p>10:00 - 14:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-accent-foreground/90 pl-8">
                <div>
                  <p className="font-medium">Søndag</p>
                  <p>Stengt</p>
                </div>
              </li>
              <li className="mt-4 text-accent-foreground/80 text-sm pl-8">
                Møter kan avtales utover åpningstider
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-accent-foreground/10 text-center">
          <p className="text-accent-foreground/80">
            © {new Date().getFullYear()} Borgen Bilsalg
          </p>
        </div>
      </div>
    </footer>
  );
}
