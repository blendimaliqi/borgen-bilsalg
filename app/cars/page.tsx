import Image from "next/image";
import Link from "next/link";
import { getCarsWithFallback } from "@/app/lib/finn-cars";

export const dynamic = "force-dynamic"; // Make this page dynamic to fetch fresh data

export default async function CarsPage() {
  // Fetch cars with fallback to sample data
  const cars = await getCarsWithFallback();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Våre biler</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Utforsk vårt utvalg av premium bruktbiler. Alle våre biler er nøye
          inspisert og kommer med garanti for å sikre din tilfredshet.
        </p>
      </div>

      {/* Filters - can be expanded later */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <button className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition">
          Alle biler
        </button>
        <button className="px-4 py-2 rounded-full bg-background hover:bg-muted transition">
          Elektrisk
        </button>
        <button className="px-4 py-2 rounded-full bg-background hover:bg-muted transition">
          Hybrid
        </button>
        <button className="px-4 py-2 rounded-full bg-background hover:bg-muted transition">
          Diesel
        </button>
        <button className="px-4 py-2 rounded-full bg-background hover:bg-muted transition">
          Bensin
        </button>
      </div>

      {/* Car grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={car.imageUrl}
                alt={car.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-xl">{car.price}</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 text-foreground">
                {car.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    {car.year}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    {car.fuel}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-muted-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                  <span className="text-sm text-muted-foreground">
                    {car.mileage}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <Link
                  href={car.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                >
                  Se detaljer
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
                <button className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition">
                  Kontakt oss
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

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
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition">
              Kontakt oss
            </button>
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
