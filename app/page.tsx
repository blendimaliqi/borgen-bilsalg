import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Mail, MapPin, Car, HandCoins, Clock } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Contact Info */}
      <section className="relative py-16 bg-primary">
        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-primary-foreground mb-4">
              Borgen Bilsalg
            </h1>
            <p className="text-2xl text-primary-foreground/80 font-medium">
              Din bilpartner i Sarpsborg
            </p>
          </div>

          {/* Prominent Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
          </div>
        </div>
      </section>

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

      {/* About Section - Shorter and More Focused */}
      <section className="py-16 px-4 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-accent-foreground">
            Om Oss
          </h2>
          <p className="text-xl text-accent-foreground/90 leading-relaxed font-medium">
            En familiebedrift i Sarpsborg med lang erfaring innen bilsalg. Vi
            gir deg personlig service og ærlige råd i en trygg og transparent
            prosess.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background text-foreground py-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground font-medium">
            © 2024 Borgen Bilsalg
          </p>
        </div>
      </footer>
    </main>
  );
}
