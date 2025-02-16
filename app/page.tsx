import { Phone, Mail, MapPin, Car, HandCoins, Clock } from "lucide-react";
import { MotionDiv, MotionH1, MotionP } from "./components/motion-wrapper";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <HeroHighlight>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-center space-y-6 px-4 md:px-0"
        >
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            <Highlight>Borgen Bilsalg</Highlight>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Din pålitelige partner for kvalitetsbiler i Sarpsborg. Vi tilbyr{" "}
            <Highlight>profesjonell service</Highlight> og
            <Highlight> trygg bilhandel</Highlight>.
          </MotionP>
        </MotionDiv>

        {/* Prominent Contact Information */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 mt-12 px-2 md:px-0"
        >
          <div className="md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 min-h-[120px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <Phone className="h-6 w-6 md:h-8 md:w-8 text-accent mb-1 md:mb-2" />
              <h3 className="text-base md:text-2xl text-primary font-medium mb-1 md:mb-2">
                Ring Direkte
              </h3>
              <p className="text-sm md:text-2xl text-foreground font-medium">
                +47 123 45 678
              </p>
            </div>
          </div>

          <div className="md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 min-h-[120px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <Mail className="h-6 w-6 md:h-8 md:w-8 text-accent mb-1 md:mb-2" />
              <h3 className="text-base md:text-2xl text-primary font-medium mb-1 md:mb-2">
                E-post
              </h3>
              <p className="text-xs md:text-xl text-foreground font-medium break-words px-2">
                zulic@borgenbilsalg.no
              </p>
            </div>
          </div>

          <div className="md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 min-h-[120px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-accent mb-1 md:mb-2" />
              <h3 className="text-base md:text-2xl text-primary font-medium mb-1 md:mb-2">
                Åpningstider
              </h3>
              <p className="text-xs md:text-lg text-foreground font-medium">
                Man-Fre: 09:00-17:00
                <br />
                Lør: 10:00-15:00
              </p>
            </div>
          </div>

          <div className="md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 md:p-6 min-h-[120px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <MapPin className="h-6 w-6 md:h-8 md:w-8 text-accent mb-1 md:mb-2" />
              <h3 className="text-base md:text-2xl text-primary font-medium mb-1 md:mb-2">
                Besøk Oss
              </h3>
              <p className="text-xs md:text-lg text-foreground font-medium">
                Borgengata 123
                <br />
                1721 Sarpsborg
              </p>
            </div>
          </div>
        </MotionDiv>
      </HeroHighlight>

      {/* Services Section */}
      <section className="py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">
            Våre Tjenester
          </h2>

          <div className="space-y-12 md:space-y-24">
            {/* Kjøp Bil Service */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium flex items-center gap-3">
                  <Car className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  Kjøp Bil
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Vi tilbyr en trygg og transparent bilkjøpsprosess. Hver bil i
                  vår kolleksjon er nøye inspisert og kvalitetssikret. Vi
                  hjelper deg med finansiering og sørger for en smidig
                  handleopplevelse fra start til slutt.
                </p>
                <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                  Les mer
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 aspect-[4/3] relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
                  alt="Kjøp bil hos Borgen Bilsalg"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Middle Separator */}
            <div className="w-full h-[2px] bg-border hidden md:block" />

            {/* Selg Bil Service */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-medium flex items-center gap-3">
                  <HandCoins className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  Selg Bil
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Ønsker du å selge din bil? Vi tilbyr en enkel og effektiv
                  salgsprosess med gratis verdivurdering og konkurransedyktige
                  priser. Vårt erfarne team sørger for en rask og problemfri
                  transaksjon.
                </p>
                <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
                  Les mer
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 aspect-[4/3] relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop"
                  alt="Selg bil til Borgen Bilsalg"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with Images */}
      <HeroHighlight>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground">Om Oss</h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto">
              En familiebedrift i Sarpsborg med over 20 års erfaring innen
              bilsalg. Vi gir deg personlig service og ærlige råd i en trygg og
              transparent prosess.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Vår Historie
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Siden 2004 har Borgen Bilsalg vært en betrodd aktør i
                  bilbransjen. Det som startet som en liten familiebedrift, har
                  vokst til å bli en av Sarpsborgs mest respekterte
                  bilforhandlere.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Våre Verdier
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-sm rotate-45" />
                    Ærlighet og transparens i alle transaksjoner
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-sm rotate-45" />
                    Kvalitet i hvert eneste kjøretøy
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-sm rotate-45" />
                    Personlig service og oppfølging
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Vårt Team
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Med vår dedikerte stab av erfarne bileksperter og
                  kundeservicemedarbeidere, står vi klare til å hjelpe deg med å
                  finne den perfekte bilen eller få best mulig pris for din
                  nåværende bil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
                  alt="Vår moderne bilbutikk"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop"
                  alt="Vårt dedikerte team"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop"
                  alt="Vårt profesjonelle verksted"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop"
                  alt="Kundetilfredshet er vår prioritet"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>

      {/* Footer */}
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
    </main>
  );
}
