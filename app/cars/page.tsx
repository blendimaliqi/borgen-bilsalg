"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Fuel,
  Gauge,
  Grid2X2,
  List,
  MapPin,
  Search,
  SlidersHorizontal,
  X,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useCars } from "../hooks/useCars";
import type { Car } from "../lib/car-types";

const sortOptions = [
  { value: "newest", label: "Publisert sist" },
  { value: "yearNewest", label: "Nyeste årsmodell" },
  { value: "yearOldest", label: "Eldste årsmodell" },
  { value: "priceAsc", label: "Laveste pris" },
  { value: "priceDesc", label: "Høyeste pris" },
] as const;

type SortOption = (typeof sortOptions)[number]["value"];
type ViewMode = "grid" | "list";

export default function CarsPage() {
  const { data: cars = [], isLoading, isError, error } = useCars();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const fuelTypes = useMemo(
    () => ["all", ...Array.from(new Set(cars.map((car) => car.fuel).filter(Boolean)))],
    [cars]
  );

  const filteredAndSortedCars = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return [...cars]
      .filter((car) => {
        const fuelMatch = activeFilter === "all" || car.fuel === activeFilter;
        const searchMatch =
          !query ||
          car.title.toLowerCase().includes(query) ||
          car.year?.toLowerCase().includes(query) ||
          car.fuel?.toLowerCase().includes(query) ||
          car.transmission?.toLowerCase().includes(query);

        return fuelMatch && searchMatch;
      })
      .sort((a, b) => {
        switch (sortOption) {
          case "priceAsc":
            return parsePrice(a.price) - parsePrice(b.price);
          case "priceDesc":
            return parsePrice(b.price) - parsePrice(a.price);
          case "yearNewest":
            return parseInt(b.year || "0", 10) - parseInt(a.year || "0", 10);
          case "yearOldest":
            return parseInt(a.year || "0", 10) - parseInt(b.year || "0", 10);
          case "newest":
          default:
            return (
              new Date(b.publishedDate || 0).getTime() -
              new Date(a.publishedDate || 0).getTime()
            );
        }
      });
  }, [activeFilter, cars, searchQuery, sortOption]);

  const availableCount = cars.filter((car) => car.status !== "sold").length;

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <section className="border-b border-border py-14 md:py-20">
        <div className="page-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">Bilutvalg</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl">
                Våre biler
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Søk i utvalget vårt, filtrer etter drivstoff og åpne annonsen på
                FINN for full beskrivelse, bilder og detaljer.
              </p>
            </div>
            <div className="grid gap-3 rounded-lg border border-border bg-card p-4 shadow-[0_18px_45px_-38px_hsl(var(--foreground))] sm:grid-cols-3">
              <Metric label="Biler" value={cars.length || "-"} />
              <Metric label="Tilgjengelig" value={availableCount || "-"} />
              <Metric
                label="Sortering"
                value={sortOptions.find((option) => option.value === sortOption)?.label || "-"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-8 md:py-10">
        <div className="rounded-lg border border-border bg-card p-4 shadow-[0_18px_45px_-38px_hsl(var(--foreground))] md:p-5">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto] lg:items-center">
            <div className="relative">
              <label htmlFor="car-search" className="sr-only">
                Søk etter bil
              </label>
              <Search
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                id="car-search"
                type="search"
                placeholder="Søk etter merke, modell, drivstoff eller årsmodell"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-md border border-input bg-background py-3 pl-10 pr-11 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="focus-ring absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Tøm søk"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>

            <div className="flex items-center gap-2 rounded-md border border-input bg-background px-3 py-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              <label htmlFor="car-sort" className="sr-only">
                Sorter biler
              </label>
              <select
                id="car-sort"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value as SortOption)}
                className="bg-transparent text-sm font-semibold text-foreground outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-md border border-input bg-background p-1">
              <ViewButton
                active={viewMode === "grid"}
                icon={<Grid2X2 className="h-4 w-4" aria-hidden="true" />}
                label="Rutenett"
                onClick={() => setViewMode("grid")}
              />
              <ViewButton
                active={viewMode === "list"}
                icon={<List className="h-4 w-4" aria-hidden="true" />}
                label="Liste"
                onClick={() => setViewMode("list")}
              />
            </div>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {fuelTypes.map((fuel) => (
              <button
                key={fuel}
                type="button"
                onClick={() => setActiveFilter(fuel)}
                className={cn(
                  "focus-ring shrink-0 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 active:translate-y-[1px]",
                  activeFilter === fuel
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-background text-foreground hover:border-primary"
                )}
              >
                {fuel === "all" ? "Alle biler" : fuel}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          {isLoading ? (
            <CarsSkeleton viewMode={viewMode} />
          ) : isError ? (
            <InventoryState
              title="Vi klarte ikke hente biler"
              description={
                error instanceof Error
                  ? error.message
                  : "Det oppstod en feil ved henting av biler. Prøv igjen senere."
              }
            />
          ) : cars.length === 0 ? (
            <InventoryState
              title="Ingen biler ligger ute akkurat nå"
              description="Kontakt oss gjerne, så kan vi fortelle hva som er på vei inn."
            />
          ) : filteredAndSortedCars.length === 0 ? (
            <InventoryState
              title="Ingen treff"
              description="Juster søket eller filtrene, eller send oss en forespørsel om bilen du leter etter."
              actionHref="/requestcar"
              actionLabel="Forespør bil"
            />
          ) : (
            <>
              <p className="mb-5 text-sm text-muted-foreground">
                Viser {filteredAndSortedCars.length}{" "}
                {filteredAndSortedCars.length === 1 ? "bil" : "biler"}
                {activeFilter !== "all" ? ` med drivstofftype ${activeFilter}` : ""}
                {searchQuery ? ` som matcher "${searchQuery}"` : ""}
              </p>

              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredAndSortedCars.map((car) => (
                    <CarGridCard key={car.id} car={car} />
                  ))}
                </div>
              ) : (
                <div className="grid gap-4">
                  {filteredAndSortedCars.map((car) => (
                    <CarListCard key={car.id} car={car} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-primary p-6 text-primary-foreground md:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Finner du ikke bilen?
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                Fortell oss hva du leter etter.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/70">
                Vi får jevnlig inn nye biler og kan følge med på modeller som
                matcher ønskene dine.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/requestcar"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-white/90 active:translate-y-[1px]"
              >
                Forespør bil
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="https://www.finn.no/mobility/search/car?orgId=4471300"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 active:translate-y-[1px]"
              >
                Se alle på FINN
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function parsePrice(price: string) {
  const numeric = parseInt(price.replace(/\D/g, "") || "0", 10);
  return Number.isNaN(numeric) ? 0 : numeric;
}

function Metric({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-md bg-muted p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 font-mono text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}

function ViewButton({
  active,
  icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded px-3 py-2 text-sm font-semibold transition-all duration-300",
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
      )}
      aria-pressed={active}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function CarGridCard({ car }: { car: Car }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_45px_-38px_hsl(var(--foreground))]">
      <CarImage car={car} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
      <div className="p-5">
        <div className="min-h-[4.5rem]">
          <h2 className="line-clamp-2 text-xl font-semibold tracking-tight text-foreground">
            {car.title}
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {car.price || "Kontakt oss"}
          </p>
        </div>
        <CarFacts car={car} />
        <CardActions car={car} />
      </div>
    </article>
  );
}

function CarListCard({ car }: { car: Car }) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-border bg-card shadow-[0_18px_45px_-38px_hsl(var(--foreground))] md:grid-cols-[320px_1fr]">
      <CarImage car={car} sizes="(max-width: 768px) 100vw, 320px" list />
      <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            {car.title}
          </h2>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {car.price || "Kontakt oss"}
          </p>
          <CarFacts car={car} wide />
        </div>
        <CardActions car={car} stacked />
      </div>
    </article>
  );
}

function CarImage({
  car,
  list = false,
  sizes,
}: {
  car: Car;
  list?: boolean;
  sizes: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", list ? "aspect-[16/10] md:aspect-auto" : "aspect-[4/3]")}>
      <Image
        src={car.imageUrl || "/car-placeholder.svg"}
        alt={car.title}
        fill
        sizes={sizes}
        className="ease-premium object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-primary/60 to-transparent" />
      {car.status === "sold" ? (
        <span className="absolute left-3 top-3 rounded-md bg-destructive px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-destructive-foreground">
          Solgt
        </span>
      ) : null}
      {car.fuel ? (
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1.5 text-xs font-semibold text-foreground">
          <Fuel className="h-3.5 w-3.5" aria-hidden="true" />
          {car.fuel}
        </span>
      ) : null}
    </div>
  );
}

function CarFacts({ car, wide = false }: { car: Car; wide?: boolean }) {
  const facts = [
    { label: "Modellår", value: car.year || "Ikke oppgitt", icon: Calendar },
    { label: "Kilometer", value: car.mileage || "Ikke oppgitt", icon: Gauge },
    { label: "Girkasse", value: car.transmission || "Ikke oppgitt", icon: Zap },
    { label: "Totalpris", value: car.price || "Kontakt oss", icon: MapPin },
  ];

  return (
    <dl className={cn("mt-5 grid gap-3", wide ? "sm:grid-cols-4" : "grid-cols-2")}>
      {facts.map((fact) => (
        <div key={fact.label} className="min-w-0 border-t border-border pt-3">
          <dt className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <fact.icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {fact.label}
          </dt>
          <dd className="mt-1 truncate text-sm font-semibold text-foreground">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CardActions({ car, stacked = false }: { car: Car; stacked?: boolean }) {
  return (
    <div className={cn("mt-5 flex gap-3", stacked ? "md:mt-0 md:flex-col" : "items-center justify-between")}>
      <a
        href={car.url}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px]"
      >
        Se detaljer
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
      <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
        ID {car.id.substring(0, 6)}
      </span>
    </div>
  );
}

function CarsSkeleton({ viewMode }: { viewMode: ViewMode }) {
  const items = Array.from({ length: viewMode === "grid" ? 6 : 4 }, (_, index) => index);

  return (
    <div
      className={cn(
        "grid gap-5",
        viewMode === "grid" ? "sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
      )}
      aria-label="Laster biler"
    >
      {items.map((item) => (
        <div
          key={item}
          className={cn(
            "rounded-lg border border-border bg-card p-4",
            viewMode === "list" ? "md:grid md:grid-cols-[320px_1fr] md:gap-5" : ""
          )}
        >
          <div className="aspect-[4/3] animate-pulse rounded-md bg-muted" />
          <div className="pt-5">
            <div className="h-6 w-4/5 animate-pulse rounded bg-muted" />
            <div className="mt-3 h-5 w-1/2 animate-pulse rounded bg-muted" />
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="h-10 animate-pulse rounded bg-muted" />
              <div className="h-10 animate-pulse rounded bg-muted" />
              <div className="h-10 animate-pulse rounded bg-muted" />
              <div className="h-10 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function InventoryState({
  actionHref = "/contact",
  actionLabel = "Kontakt oss",
  description,
  title,
}: {
  actionHref?: string;
  actionLabel?: string;
  description: string;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-8 text-center shadow-[0_18px_45px_-38px_hsl(var(--foreground))]">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <Link
        href={actionHref}
        className="focus-ring mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px]"
      >
        {actionLabel}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
