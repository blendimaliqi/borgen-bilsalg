"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, HandCoins, ShieldCheck } from "lucide-react";
import { MotionDiv } from "./motion-wrapper";

const services = [
  {
    icon: Car,
    title: "Kjøp bil hos oss",
    description:
      "Vi gjør kjøpsprosessen ryddig fra første visning til overlevering, med tydelig informasjon om bil, pris og historikk.",
    imageSrc: "/images/services/man-buying-car.jpg",
    imageAlt: "Kunde som kjøper bil hos Borgen Bilsalg",
  },
  {
    icon: HandCoins,
    title: "Selg bilen din",
    description:
      "Få en uforpliktende vurdering hvis du vil selge bilen direkte til oss, eller ønsker hjelp med salg.",
    imageSrc: "/images/services/medium-shot-man-working-as-valet.jpg",
    imageAlt: "Bilforhandler klargjør bil for kunde",
  },
  {
    icon: ShieldCheck,
    title: "Innbytte",
    description:
      "Vi vurderer bilen din rettferdig og hjelper deg over i en nyere eller mer praktisk bil.",
    imageSrc: "/images/services/close-up-sales-manager-black-suit-selling-car-customer.jpg",
    imageAlt: "Avtale om bilhandel og innbytte",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="page-shell">
        <div className="mb-10 grid gap-6 md:grid-cols-[0.75fr_1.25fr] md:items-end">
          <div>
            <p className="eyebrow mb-3">Tjenester</p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
              Trygg bilhandel uten omveier
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:justify-self-end md:text-lg">
            Enten du skal kjøpe, selge eller bytte bil, handler prosessen om
            tydelige svar, riktig pris og enkel oppfølging.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <ServiceFeature service={services[0]} />
          <div className="grid gap-5">
            {services.slice(1).map((service) => (
              <ServiceRow key={service.title} service={service} />
            ))}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-lg border border-border bg-primary p-6 text-primary-foreground"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
                Neste steg
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                Avtal visning eller send oss et bilønske.
              </h3>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cars"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-white/90 active:translate-y-[1px]"
                >
                  Se biler
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/requestcar"
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 active:translate-y-[1px]"
                >
                  Forespør bil
                </Link>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceFeature({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="group overflow-hidden rounded-lg border border-border bg-card shadow-[0_24px_60px_-44px_hsl(var(--foreground))]"
    >
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="ease-premium object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-muted text-foreground">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-semibold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </MotionDiv>
  );
}

function ServiceRow({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="group grid gap-4 rounded-lg border border-border bg-card p-4 shadow-[0_18px_45px_-38px_hsl(var(--foreground))] sm:grid-cols-[170px_1fr]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted sm:aspect-auto">
        <Image
          src={service.imageSrc}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 170px"
          className="ease-premium object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-1">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-muted text-foreground">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>
    </MotionDiv>
  );
}
