import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
          className="text-center space-y-6"
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl text-primary">
                <Phone className="h-8 w-8 text-accent" />
                Ring Direkte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-foreground text-center font-medium">
                +47 123 45 678
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl text-primary">
                <Mail className="h-8 w-8 text-accent" />
                E-post
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-foreground text-center font-medium">
                post@borgenbilsalg.no
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl text-primary">
                <Clock className="h-8 w-8 text-accent" />
                Åpningstider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground text-center font-medium">
                Man-Fre: 09:00-17:00
                <br />
                Lør: 10:00-15:00
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/95 backdrop-blur-sm border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl text-primary">
                <MapPin className="h-8 w-8 text-accent" />
                Besøk Oss
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground text-center font-medium">
                Borgengata 123
                <br />
                1721 Sarpsborg
              </p>
            </CardContent>
          </Card>
        </MotionDiv>
      </HeroHighlight>

      {/* Services Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Våre Tjenester
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                  <Car className="h-8 w-8 text-accent" />
                  Kjøp Bil
                </CardTitle>
                <CardDescription className="text-lg text-secondary font-medium">
                  Trygg handel av kvalitetsbiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-foreground space-y-3 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-sm rotate-45" />
                    Nøye inspiserte biler
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-sm rotate-45" />
                    Hjelp med finansiering
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-sm rotate-45" />
                    Trygg og sikker handel
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-border/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                  <HandCoins className="h-8 w-8 text-accent" />
                  Selg Bil
                </CardTitle>
                <CardDescription className="text-lg text-secondary font-medium">
                  Rask og enkel salgsprosess
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-foreground space-y-3 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-sm rotate-45" />
                    Gratis verdivurdering
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-sm rotate-45" />
                    Rettferdig pristilbud
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-sm rotate-45" />
                    Rask utbetaling
                  </li>
                </ul>
              </CardContent>
            </Card>
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
                  src="/showroom.jpg"
                  alt="Vår moderne bilbutikk"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/team.jpg"
                  alt="Vårt dedikerte team"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/workshop.jpg"
                  alt="Vårt profesjonelle verksted"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                <img
                  src="/handshake.jpg"
                  alt="Kundetilfredshet er vår prioritet"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>

      {/* Footer */}
      <footer className="bg-accent py-12">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-8 text-lg text-accent-foreground">
            <p className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-accent-foreground/80" />
              +47 123 45 678
            </p>
            <a
              href="mailto:post@borgenbilsalg.no"
              className="flex items-center gap-2 hover:text-accent-foreground/80 transition-colors"
            >
              <Mail className="h-5 w-5 text-accent-foreground/80" />
              post@borgenbilsalg.no
            </a>
          </div>
          <p className="text-lg text-accent-foreground/90 font-medium">
            © 2024 Borgen Bilsalg
          </p>
        </div>
      </footer>
    </main>
  );
}
