"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, ExternalLink, Fuel, Gauge } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useCars } from "../hooks/useCars";
import type { Car } from "../lib/car-types";

export function CarSection() {
  const { data: cars = [], isLoading, isError } = useCars();
  const [showSlowLoadingFallback, setShowSlowLoadingFallback] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowSlowLoadingFallback(false);
      return;
    }

    const timeout = window.setTimeout(() => {
      setShowSlowLoadingFallback(true);
    }, 4500);

    return () => window.clearTimeout(timeout);
  }, [isLoading]);

  const featuredCars = useMemo(
    () =>
      [...cars]
        .sort(
          (a, b) =>
            new Date(b.publishedDate || 0).getTime() -
            new Date(a.publishedDate || 0).getTime()
        )
        .slice(0, 4),
    [cars]
  );

  return (
    <section className="border-y border-border bg-card py-16 md:py-24">
      <div className="page-shell">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <div>
            <p className="eyebrow mb-3">Sist lagt til</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Aktuelle biler fra vårt utvalg
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Vi viser de nyeste bilene direkte fra lagerlisten, slik at du
              raskt ser hva som er tilgjengelig.
            </p>
            <Link
              href="/cars"
              className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px]"
            >
              Se alle biler
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {isLoading && !showSlowLoadingFallback ? (
          <CarSectionSkeleton />
        ) : isLoading && showSlowLoadingFallback ? (
          <StatePanel
            title="Bilene bruker litt tid på å laste"
            description="Gå til bilsiden for komplett utvalg mens vi henter lagerlisten."
          />
        ) : isError ? (
          <StatePanel
            title="Vi klarte ikke hente biler akkurat nå"
            description="Prøv igjen om litt, eller ta kontakt så hjelper vi deg med tilgjengelige biler."
          />
        ) : featuredCars.length === 0 ? (
          <StatePanel
            title="Ingen biler ligger ute akkurat nå"
            description="Kontakt oss gjerne, så kan vi fortelle hva som er på vei inn."
          />
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <FeaturedVehicle car={featuredCars[0]} />
            <div className="grid gap-5">
              {featuredCars.slice(1).map((car) => (
                <CompactVehicle key={car.id} car={car} />
              ))}
              <div className="rounded-lg border border-border bg-background p-5">
                <p className="text-sm font-semibold text-foreground">
                  Finner du ikke riktig bil?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Send oss en forespørsel, så følger vi med på biler som matcher
                  ønskene dine.
                </p>
                <Link
                  href="/requestcar"
                  className="focus-ring mt-4 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:translate-y-[1px]"
                >
                  Forespør bil
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedVehicle({ car }: { car: Car }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-background shadow-[0_24px_60px_-42px_hsl(var(--foreground))]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={car.imageUrl || "/car-placeholder.svg"}
          alt={car.title}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="ease-premium object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
        {car.status === "sold" ? (
          <span className="absolute left-4 top-4 rounded-md bg-destructive px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-destructive-foreground">
            Solgt
          </span>
        ) : null}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">
            Nyeste bil
          </p>
          <h3 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight md:text-4xl">
            {car.title}
          </h3>
          <p className="mt-3 text-2xl font-semibold">{car.price || "Kontakt oss"}</p>
        </div>
      </div>
      <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-7">
        <VehicleSpecs car={car} />
        <a
          href={car.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px]"
        >
          Se på FINN
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function CompactVehicle({ car }: { car: Car }) {
  return (
    <article className="group grid gap-4 rounded-lg border border-border bg-background p-3 shadow-[0_18px_45px_-38px_hsl(var(--foreground))] sm:grid-cols-[150px_1fr]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted sm:aspect-auto">
        <Image
          src={car.imageUrl || "/car-placeholder.svg"}
          alt={car.title}
          fill
          sizes="(max-width: 640px) 100vw, 150px"
          className="ease-premium object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 p-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 text-base font-semibold tracking-tight text-foreground">
            {car.title}
          </h3>
          {car.status === "sold" ? (
            <span className="shrink-0 rounded-md bg-destructive/10 px-2 py-1 text-xs font-semibold text-destructive">
              Solgt
            </span>
          ) : null}
        </div>
        <p className="mt-2 text-lg font-semibold text-foreground">
          {car.price || "Kontakt oss"}
        </p>
        <VehicleSpecs car={car} compact />
        <a
          href={car.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
        >
          Detaljer
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function VehicleSpecs({ car, compact = false }: { car: Car; compact?: boolean }) {
  const specs = [
    { label: "År", value: car.year || "Ikke oppgitt", icon: Calendar },
    { label: "Km", value: car.mileage || "Ikke oppgitt", icon: Gauge },
    { label: "Drivstoff", value: car.fuel || "Ikke oppgitt", icon: Fuel },
  ];

  return (
    <dl className={compact ? "mt-3 grid grid-cols-3 gap-2" : "grid gap-3 sm:grid-cols-3"}>
      {specs.map((spec) => (
        <div key={spec.label} className="min-w-0">
          <dt className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <spec.icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {spec.label}
          </dt>
          <dd className="mt-1 truncate text-sm font-semibold text-foreground">
            {spec.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CarSectionSkeleton() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]" aria-label="Laster biler">
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="aspect-[16/10] animate-pulse rounded-md bg-muted" />
        <div className="mt-5 h-6 w-2/3 animate-pulse rounded bg-muted" />
        <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-muted" />
      </div>
      <div className="grid gap-5">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className="grid gap-4 rounded-lg border border-border bg-background p-3 sm:grid-cols-[150px_1fr]"
          >
            <div className="aspect-[4/3] animate-pulse rounded-md bg-muted" />
            <div>
              <div className="h-5 w-4/5 animate-pulse rounded bg-muted" />
              <div className="mt-3 h-4 w-1/2 animate-pulse rounded bg-muted" />
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="h-8 animate-pulse rounded bg-muted" />
                <div className="h-8 animate-pulse rounded bg-muted" />
                <div className="h-8 animate-pulse rounded bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatePanel({
  description,
  secondaryHref,
  secondaryLabel,
  title,
}: {
  description: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  title: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-8 text-center">
      <h3 className="text-xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/cars"
          className="focus-ring inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px]"
        >
          Se bilsiden
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        {secondaryHref && secondaryLabel ? (
          <a
            href={secondaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground active:translate-y-[1px]"
          >
            {secondaryLabel}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </div>
  );
}
