"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCars } from "../hooks/useCars";

export default function CarsPage() {
  const { data: cars = [], isLoading, isError, error } = useCars();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Filter cars based on selected filter
  const filteredCars =
    activeFilter === "all"
      ? cars
      : cars.filter((car) => car.fuel === activeFilter);

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Våre biler</h1>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => handleFilterChange("all")}
          className={`px-4 py-2 rounded-md ${
            activeFilter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          Alle biler
        </button>
        <button
          onClick={() => handleFilterChange("Bensin")}
          className={`px-4 py-2 rounded-md ${
            activeFilter === "Bensin"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          Bensin
        </button>
        <button
          onClick={() => handleFilterChange("Diesel")}
          className={`px-4 py-2 rounded-md ${
            activeFilter === "Diesel"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          Diesel
        </button>
        <button
          onClick={() => handleFilterChange("Elektrisk")}
          className={`px-4 py-2 rounded-md ${
            activeFilter === "Elektrisk"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          Elektrisk
        </button>
        <button
          onClick={() => handleFilterChange("Hybrid")}
          className={`px-4 py-2 rounded-md ${
            activeFilter === "Hybrid"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
        >
          Hybrid
        </button>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md relative mb-6">
          <strong className="font-bold">Feil! </strong>
          <span className="block sm:inline">
            {error instanceof Error
              ? error.message
              : "Det oppstod en feil ved henting av biler. Vennligst prøv igjen senere."}
          </span>
        </div>
      )}

      {/* No cars found state */}
      {!isLoading && !isError && cars.length === 0 && (
        <div className="bg-secondary/10 border border-secondary text-secondary-foreground px-4 py-3 rounded-md relative mb-6">
          <strong className="font-bold">Ingen biler funnet! </strong>
          <span className="block sm:inline">
            Vi kunne ikke finne noen biler for øyeblikket. Dette kan skyldes en
            midlertidig feil eller at det ikke er noen biler tilgjengelig.
          </span>
        </div>
      )}

      {/* No filtered results */}
      {!isLoading &&
        !isError &&
        cars.length > 0 &&
        filteredCars.length === 0 && (
          <div className="bg-accent/10 border border-accent text-accent-foreground px-4 py-3 rounded-md relative mb-6">
            <strong className="font-bold">Ingen treff! </strong>
            <span className="block sm:inline">
              Vi fant ingen biler som matcher filteret "{activeFilter}". Prøv et
              annet filter.
            </span>
          </div>
        )}

      {/* Car grid */}
      {!isLoading && filteredCars.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={car.imageUrl}
                  alt={car.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {car.status === "sold" && (
                  <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1 m-2 rounded">
                    Solgt
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{car.title}</h2>
                <p className="text-2xl font-bold text-primary mb-2">
                  {car.price}
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Årsmodell
                    </span>
                    <p>{car.year || "Ikke oppgitt"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Kilometer
                    </span>
                    <p>{car.mileage || "Ikke oppgitt"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Girkasse
                    </span>
                    <p>{car.transmission || "Ikke oppgitt"}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Drivstoff
                    </span>
                    <p>{car.fuel || "Ikke oppgitt"}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={car.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md inline-block transition-colors duration-300"
                  >
                    Se detaljer
                  </a>
                  <span className="text-sm text-muted-foreground">
                    ID: {car.id.substring(0, 8)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Call to action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Finner du ikke det du leter etter?
          </h2>
          <p className="text-muted-foreground mb-6">
            Vi får jevnlig inn nye biler. Kontakt oss for å høre om kommende
            biler eller for å diskutere dine spesifikke ønsker.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href={"/contact"}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Kontakt oss
            </Link>
            <Link
              href="https://www.finn.no/mobility/search/car?orgId=4471300"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition"
            >
              Se alle på Finn.no
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
