import { Metadata } from "next";
import { ContactCards } from "../components/ContactCards";
import { MotionDiv, MotionH1, MotionP } from "../components/motion-wrapper";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt Oss | Borgen Bilsalg",
  description:
    "Ta kontakt med Borgen Bilsalg for spørsmål om våre biler eller for å avtale en visning.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/30 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <MotionH1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
            >
              Kontakt Oss
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Vi er her for å hjelpe deg med alle spørsmål om våre biler. Ta
              kontakt med oss via telefon, e-post eller besøk oss i våre
              lokaler.
            </MotionP>
          </div>

          {/* Contact Cards */}
          <ContactCards />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Finn oss
              </h2>
              <p className="text-lg text-muted-foreground">
                Vi holder til i Industriveien 29, 1725 Sarpsborg. Våre lokaler
                er lett tilgjengelige med god parkeringsplass for besøkende.
              </p>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Adresse</h3>
                  <p className="text-muted-foreground">Industriveien 29</p>
                  <p className="text-muted-foreground">1725 Sarpsborg</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">E-post</h3>
                  <p className="text-muted-foreground">
                    mirnes@borgenbilsalg.no
                  </p>
                  <p className="text-muted-foreground">
                    For generelle henvendelser og spørsmål
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047.1545493106428!2d11.090560477114266!3d59.27717447331787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464412e2b4019c99%3A0x4e47f19c99b5b1eb!2sIndustriveien%2029%2C%201725%20Sarpsborg!5e0!3m2!1sen!2sno!4v1699123456789!5m2!1sen!2sno"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Borgen Bilsalg location"
                className="w-full h-full"
              ></iframe>
            </MotionDiv>
          </div>
        </div>
      </section>
    </main>
  );
}
