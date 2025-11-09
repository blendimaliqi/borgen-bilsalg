"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useCars } from "../hooks/useCars";

export function CarSection() {
  const { data: cars, isLoading } = useCars();

  // Get the first 3 cars sorted by newest published date
  const featuredCars =
    cars
      ?.sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
      )
      .slice(0, 3) || [];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Sist lagt til
            </h2>
            <p className="text-gray-600 text-lg">
              Utforsk våre nyeste tilskudd til bilutvalget
            </p>
          </div>
          <Link
            href="/cars"
            className="hidden md:inline-flex items-center text-gray-900 font-medium hover:gap-3 gap-2 transition-all"
          >
            Se alle biler
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {/* Featured Cars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {isLoading ? (
            <div className="col-span-3 text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-gray-900 border-r-transparent"></div>
              <p className="mt-4 text-gray-600">Laster biler...</p>
            </div>
          ) : featuredCars.length > 0 ? (
            featuredCars.map((car) => (
              <div key={car.id} className="bg-white group">
                <div className="relative h-64 overflow-hidden mb-6">
                  <Image
                    src={car.imageUrl || "/car-placeholder.svg"}
                    alt={car.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-white text-gray-900 px-4 py-2 text-sm font-medium">
                    {car.year}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {car.title}
                  </h3>
                  <p className="text-2xl font-bold text-gray-900 mb-6">
                    {car.price}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between">
                      <span>Kilometerstand</span>
                      <span className="font-medium text-gray-900">
                        {car.mileage}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Drivstoff</span>
                      <span className="font-medium text-gray-900">
                        {car.fuel}
                      </span>
                    </div>
                  </div>
                  <a
                    href={car.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 font-medium hover:gap-3 gap-2 transition-all"
                  >
                    Se detaljer
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-600">Ingen biler funnet.</p>
            </div>
          )}
        </div>

        {/* Call to action */}
        <div className="bg-gray-900 p-12 md:p-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Se alle våre biler
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Klikk her for å se vårt komplette utvalg av kvalitetsbiler med
              detaljerte beskrivelser og bilder
            </p>
            <Link
              href="/cars"
              className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 text-base font-medium hover:bg-gray-100 transition-colors"
            >
              Vis alle biler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
