"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useCars } from "../hooks/useCars";

export function CarSection() {
  const { data: cars, isLoading } = useCars();

  // Get the first 3 cars sorted by newest model year
  const featuredCars =
    cars
      ?.sort((a, b) => parseInt(b.year || "0") - parseInt(a.year || "0"))
      .slice(0, 3) || [];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Sist lagt til
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utforsk våre nyeste tilskudd til bilutvalget
          </p>
          <Link
            href="/cars"
            className="inline-flex items-center mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            Se alle biler
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Featured Cars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {isLoading ? (
            <div className="col-span-3 text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-muted-foreground">Laster biler...</p>
            </div>
          ) : featuredCars.length > 0 ? (
            featuredCars.map((car) => (
              <div
                key={car.id}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={car.imageUrl || "/car-placeholder.svg"}
                    alt={car.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {car.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{car.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-4">
                    {car.price}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                    <div>Kilometerstand: {car.mileage}</div>
                    <div>Drivstoff: {car.fuel}</div>
                  </div>
                  <a
                    href={car.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Se detaljer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-muted-foreground">Ingen biler funnet.</p>
            </div>
          )}
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
              Se alle våre biler
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Klikk her for å se vårt komplette utvalg av kvalitetsbiler med
              detaljerte beskrivelser og bilder
            </p>
            <Link
              href="/cars"
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
