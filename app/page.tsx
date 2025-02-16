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
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Contact Info */}
      <section className="relative py-16 bg-gradient-to-b from-blue-950 to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-white mb-4">
              Borgen Bilsalg
            </h1>
            <p className="text-2xl text-blue-300">Din bilpartner i Sarpsborg</p>
          </div>

          {/* Prominent Contact Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <Card className="bg-gray-800 border-blue-700 border">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl text-white">
                  <Phone className="h-8 w-8 text-blue-400" />
                  Ring Direkte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl text-blue-300 text-center">
                  +47 123 45 678
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-blue-700 border">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl text-white">
                  <Mail className="h-8 w-8 text-blue-400" />
                  E-post
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-blue-300 text-center">
                  post@borgenbilsalg.no
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-blue-700 border">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl text-white">
                  <Clock className="h-8 w-8 text-blue-400" />
                  Åpningstider
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-blue-300 text-center">
                  Man-Fre: 09:00-17:00
                  <br />
                  Lør: 10:00-15:00
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-blue-700 border">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl text-white">
                  <MapPin className="h-8 w-8 text-blue-400" />
                  Besøk Oss
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-blue-300 text-center">
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
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-12 text-white">
            Våre Tjenester
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-900 border-blue-700 border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <Car className="h-8 w-8 text-blue-400" />
                  Kjøp Bil
                </CardTitle>
                <CardDescription className="text-lg text-blue-300">
                  Trygg handel av kvalitetsbiler
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Nøye inspiserte biler</li>
                  <li>• Hjelp med finansiering</li>
                  <li>• Trygg og sikker handel</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-blue-700 border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-white">
                  <HandCoins className="h-8 w-8 text-blue-400" />
                  Selg Bil
                </CardTitle>
                <CardDescription className="text-lg text-blue-300">
                  Rask og enkel salgsprosess
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-3 text-lg">
                  <li>• Gratis verdivurdering</li>
                  <li>• Rettferdig pristilbud</li>
                  <li>• Rask utbetaling</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section - Shorter and More Focused */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 text-white">Om Oss</h2>
          <p className="text-xl text-blue-300 leading-relaxed">
            En familiebedrift i Sarpsborg med lang erfaring innen bilsalg. Vi
            gir deg personlig service og ærlige råd i en trygg og transparent
            prosess.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-xl text-blue-300">© 2024 Borgen Bilsalg</p>
        </div>
      </footer>
    </main>
  );
}
