import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

// Sample featured cars data
const featuredCars = [
  {
    id: 1,
    name: "Audi Q7",
    year: 2022,
    price: "899 000 kr",
    mileage: "15 000 km",
    fuel: "Diesel",
    image:
      "https://images.unsplash.com/photo-1606664922998-f11d2a8b8f86?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "BMW X5",
    year: 2021,
    price: "849 000 kr",
    mileage: "25 000 km",
    fuel: "Bensin",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Mercedes-Benz E-Klasse",
    year: 2023,
    price: "950 000 kr",
    mileage: "5 000 km",
    fuel: "Hybrid",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
  },
];

export function CarSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Utvalgte Biler
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utforsk vårt utvalg av kvalitetsbiler. Alle våre biler gjennomgår
            grundig inspeksjon for å sikre høyeste standard.
          </p>
        </div>

        {/* Featured Cars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {car.year}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{car.name}</h3>
                <p className="text-2xl font-bold text-primary mb-4">
                  {car.price}
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                  <div>Kilometerstand: {car.mileage}</div>
                  <div>Drivstoff: {car.fuel}</div>
                </div>
                <Link
                  href={`https://www.finn.no/mobility/search/car?orgId=4471300`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Se detaljer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-primary-foreground/90 fill-primary-foreground/90" />
              <Star className="h-8 w-8 text-primary-foreground/90 fill-primary-foreground/90" />
              <Star className="h-8 w-8 text-primary-foreground/90 fill-primary-foreground/90" />
              <Star className="h-8 w-8 text-primary-foreground/90 fill-primary-foreground/90" />
              <Star className="h-8 w-8 text-primary-foreground/90 fill-primary-foreground/90" />
            </div>
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Se alle våre biler på Finn.no
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Klikk her for å se vårt komplette utvalg av kvalitetsbiler med
              detaljerte beskrivelser og bilder
            </p>
            <Link
              href="https://www.finn.no/mobility/search/car?orgId=4471300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-background text-primary px-12 py-4 rounded-xl font-bold text-xl hover:bg-muted transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Vis alle biler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
