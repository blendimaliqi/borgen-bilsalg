import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-accent py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full h-[400px] mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023.8946703281793!2d11.09293157944697!3d59.27710435279952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464412e0a88e7d3d%3A0x8f8e765feb7b684e!2sIndustriveien%2029%2C%201725%20Sarpsborg!5e1!3m2!1sen!2sno!4v1710750000000!5m2!1sen!2sno"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Borgen Bilsalg Location"
          />
          <a
            href="https://www.google.com/maps/place/Industriveien+29,+1725+Sarpsborg/@59.27710435279952,11.09293157944697,17z"
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
            href="https://www.google.com/maps/place/Industriveien+29,+1725+Sarpsborg/@59.27710435279952,11.09293157944697,17z"
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
            +47 123 45 678
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
            © 2024 Borgen Bilsalg
          </p>
        </div>
      </div>
    </footer>
  );
}
