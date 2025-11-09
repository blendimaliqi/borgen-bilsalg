"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCars } from "../hooks/useCars";
import {
  Search,
  ArrowUpDown,
  X,
  Zap,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
} from "lucide-react";

export default function CarsPage() {
  const { data: cars = [], isLoading, isError, error } = useCars();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSortOptions, setShowSortOptions] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get unique fuel types from cars
  const fuelTypes = [
    "all",
    ...new Set(cars.map((car) => car.fuel).filter(Boolean)),
  ];

  // Filter and sort cars
  const filteredAndSortedCars = cars
    .filter((car) => {
      // Filter by fuel type
      const fuelMatch = activeFilter === "all" || car.fuel === activeFilter;

      // Filter by search query
      const searchMatch =
        !searchQuery ||
        car.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (car.year &&
          car.year.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (car.fuel &&
          car.fuel.toLowerCase().includes(searchQuery.toLowerCase()));

      return fuelMatch && searchMatch;
    })
    .sort((a, b) => {
      // Sort based on selected option
      switch (sortOption) {
        case "priceAsc":
          return (
            parseInt(a.price.replace(/\D/g, "") || "0") -
            parseInt(b.price.replace(/\D/g, "") || "0")
          );
        case "priceDesc":
          return (
            parseInt(b.price.replace(/\D/g, "") || "0") -
            parseInt(a.price.replace(/\D/g, "") || "0")
          );
        case "newest":
          try {
            // If either date is undefined, treat it as oldest
            if (!a.publishedDate && !b.publishedDate) return 0;
            if (!a.publishedDate) return 1;
            if (!b.publishedDate) return -1;

            const dateA = new Date(a.publishedDate);
            const dateB = new Date(b.publishedDate);

            // Check if dates are valid
            if (isNaN(dateA.getTime()) && isNaN(dateB.getTime())) return 0;
            if (isNaN(dateA.getTime())) return 1;
            if (isNaN(dateB.getTime())) return -1;

            return dateB.getTime() - dateA.getTime();
          } catch (error) {
            console.error("Error comparing dates:", error);
            return 0;
          }
        case "yearNewest":
          return parseInt(b.year || "0") - parseInt(a.year || "0");
        case "yearOldest":
          return parseInt(a.year || "0") - parseInt(b.year || "0");
        default:
          return 0;
      }
    });

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Handle sort change
  const handleSortChange = (option: string) => {
    setSortOption(option);
    setShowSortOptions(false);
  };

  // Toggle view mode
  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "grid" ? "list" : "grid"));
  };

  // Scroll to top on filter change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-4xl font-bold mb-4 md:mb-0 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Våre biler
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Søk etter bilmerke, modell..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-10 pr-10 py-2 border w-full focus:ring-2 focus:ring-primary focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSortOptions(!showSortOptions)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 transition-colors w-full sm:w-auto"
            >
              <ArrowUpDown className="h-5 w-5" />
              <span>Sortering</span>
            </button>

            {showSortOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-card shadow-lg z-10 border animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="py-1">
                  <button
                    onClick={() => handleSortChange("newest")}
                    className={`block px-4 py-2 text-sm w-full text-left hover:bg-muted ${
                      sortOption === "newest" ? "bg-muted/70 font-medium" : ""
                    }`}
                  >
                    Publisert
                  </button>
                  <button
                    onClick={() => handleSortChange("yearNewest")}
                    className={`block px-4 py-2 text-sm w-full text-left hover:bg-muted ${
                      sortOption === "yearNewest"
                        ? "bg-muted/70 font-medium"
                        : ""
                    }`}
                  >
                    Årsmodell nyeste
                  </button>
                  <button
                    onClick={() => handleSortChange("yearOldest")}
                    className={`block px-4 py-2 text-sm w-full text-left hover:bg-muted ${
                      sortOption === "yearOldest"
                        ? "bg-muted/70 font-medium"
                        : ""
                    }`}
                  >
                    Årsmodell eldste
                  </button>
                  <button
                    onClick={() => handleSortChange("priceAsc")}
                    className={`block px-4 py-2 text-sm w-full text-left hover:bg-muted ${
                      sortOption === "priceAsc" ? "bg-muted/70 font-medium" : ""
                    }`}
                  >
                    Pris (lav til høy)
                  </button>
                  <button
                    onClick={() => handleSortChange("priceDesc")}
                    className={`block px-4 py-2 text-sm w-full text-left hover:bg-muted ${
                      sortOption === "priceDesc"
                        ? "bg-muted/70 font-medium"
                        : ""
                    }`}
                  >
                    Pris (høy til lav)
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={toggleViewMode}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 transition-colors"
          >
            <span>
              {viewMode === "grid" ? "Listevisning" : "Rutenettvisning"}
            </span>
          </button>
        </div>
      </div>

      {/* Always visible fuel type filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3">
          {fuelTypes.map((fuel) => (
            <button
              key={fuel}
              onClick={() => handleFilterChange(fuel)}
              className={`px-4 py-2 text-sm transition-all ${
                activeFilter === fuel
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/50 hover:bg-muted text-foreground hover:shadow-sm"
              }`}
            >
              {fuel === "all" ? "Alle biler" : fuel}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {/* Error state */}
      {isError && (
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 relative mb-6">
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
        <div className="bg-secondary/10 border border-secondary text-secondary-foreground px-4 py-3 relative mb-6">
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
        filteredAndSortedCars.length === 0 && (
          <div className="bg-accent/10 border border-accent text-accent-foreground px-4 py-3 relative mb-6">
            <strong className="font-bold">Ingen treff! </strong>
            <span className="block sm:inline">
              Vi fant ingen biler som matcher dine søkekriterier. Prøv å justere
              filtrene eller søket.
            </span>
          </div>
        )}

      {/* Results count */}
      {!isLoading && filteredAndSortedCars.length > 0 && (
        <p className="text-muted-foreground mb-6">
          Viser {filteredAndSortedCars.length}{" "}
          {filteredAndSortedCars.length === 1 ? "bil" : "biler"}
          {activeFilter !== "all" ? ` med drivstofftype "${activeFilter}"` : ""}
          {searchQuery ? ` som matcher "${searchQuery}"` : ""}
        </p>
      )}

      {/* Car grid or list */}
      {!isLoading &&
        filteredAndSortedCars.length > 0 &&
        (viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredAndSortedCars.map((car) => (
              <div
                key={car.id}
                className="bg-card shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 group"
              >
                <div className="relative h-32 sm:h-48 overflow-hidden">
                  <Image
                    src={car.imageUrl}
                    alt={car.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  {car.status === "sold" && (
                    <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1 m-2 font-medium">
                      Solgt
                    </div>
                  )}
                  {car.fuel && (
                    <div className="absolute bottom-0 left-0 bg-black/70 text-white px-2 sm:px-3 py-0.5 sm:py-1 m-1 sm:m-2 text-xs sm:text-sm flex items-center gap-1">
                      <Fuel className="h-3 w-3 sm:h-4 sm:w-4" />
                      {car.fuel}
                    </div>
                  )}
                </div>
                <div className="p-2 sm:p-4">
                  <h2 className="text-sm sm:text-xl font-semibold mb-1 sm:mb-2 line-clamp-2">
                    {car.title}
                  </h2>
                  <div className="grid grid-cols-2 gap-1 sm:gap-3 mb-2 sm:mb-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      <div>
                        <span className="text-muted-foreground text-xs sm:text-sm block">
                          Modellår
                        </span>
                        <p className="font-medium text-xs sm:text-base">
                          {car.year || "Ikke oppgitt"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Gauge className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      <div>
                        <span className="text-muted-foreground text-xs sm:text-sm block">
                          Kilometer
                        </span>
                        <p className="font-medium text-xs sm:text-base">
                          {car.mileage || "Ikke oppgitt"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      <div>
                        <span className="text-muted-foreground text-xs sm:text-sm block">
                          Girkasse
                        </span>
                        <p className="font-medium text-xs sm:text-base">
                          {car.transmission || "Ikke oppgitt"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      <div>
                        <span className="text-muted-foreground text-xs sm:text-sm block">
                          Totalpris
                        </span>
                        <p className="font-medium text-primary text-xs sm:text-lg">
                          {car.price || "Kontakt oss"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={car.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-2 sm:px-4 py-1 sm:py-2 inline-block transition-colors duration-300 text-xs sm:text-base"
                    >
                      Se detaljer
                    </a>
                    <span className="text-[10px] sm:text-sm text-muted-foreground">
                      ID: {car.id.substring(0, 6)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredAndSortedCars.map((car) => (
              <div
                key={car.id}
                className="bg-card shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 flex flex-col md:flex-row"
              >
                <div className="relative h-48 md:h-auto md:w-1/3 md:min-w-[250px]">
                  <Image
                    src={car.imageUrl}
                    alt={car.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="h-full w-full"
                  />
                  {car.status === "sold" && (
                    <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-3 py-1 m-2 font-medium">
                      Solgt
                    </div>
                  )}
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold mb-2">
                        {car.title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-muted-foreground text-xs sm:text-sm block">
                            Modellår
                          </span>
                          <p className="font-medium text-sm sm:text-base">
                            {car.year || "Ikke oppgitt"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-muted-foreground text-xs sm:text-sm block">
                            Kilometer
                          </span>
                          <p className="font-medium text-sm sm:text-base">
                            {car.mileage || "Ikke oppgitt"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-muted-foreground text-xs sm:text-sm block">
                            Girkasse
                          </span>
                          <p className="font-medium text-sm sm:text-base">
                            {car.transmission || "Ikke oppgitt"}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <span className="text-muted-foreground text-xs sm:text-sm block">
                            Totalpris
                          </span>
                          <p className="font-medium text-primary text-base sm:text-lg">
                            {car.price || "Kontakt oss"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={car.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 inline-block transition-colors duration-300 text-xs sm:text-base"
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
        ))}

      {/* Call to action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 max-w-4xl mx-auto shadow-lg border border-border/50">
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
              className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition flex items-center gap-2"
            >
              <MapPin className="h-5 w-5" />
              Kontakt oss
            </Link>
            <Link
              href="https://www.finn.no/mobility/search/car?orgId=4471300"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 transition flex items-center gap-2"
            >
              Se alle på Finn.no
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
