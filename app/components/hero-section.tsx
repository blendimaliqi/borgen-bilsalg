"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { MotionDiv, MotionP } from "./motion-wrapper";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-x-clip bg-background">
      <div className="absolute inset-0 -z-10 noise-layer opacity-35" />
      <div className="page-shell overflow-hidden py-8 md:py-10 lg:py-12">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="relative z-10 min-w-0">
            <MotionP
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="eyebrow mb-5"
            >
              Borgen Bilsalg
            </MotionP>
            <MotionDiv
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <h1 className="max-w-3xl break-words text-[clamp(2.1rem,9.6vw,4.65rem)] font-semibold leading-[1.01] tracking-normal text-foreground">
                <span className="block">Kvalitetsbiler</span>
                <span className="block text-foreground/72">i Sarpsborg</span>
                <span className="block text-balance">
                  klare for prøvekjøring.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                Se aktuelle biler, avtal visning og få ryddig hjelp gjennom hele
                handelen.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start"
            >
              <Link
                href="/cars"
                className="focus-ring ease-premium group inline-flex w-full items-center justify-center gap-3 rounded-md bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:translate-y-[1px] sm:w-auto"
              >
                Se våre biler
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
              <a
                href="tel:+4798681758"
                className="focus-ring inline-flex w-full items-center justify-center gap-3 rounded-md border border-border bg-card px-6 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary active:translate-y-[1px] sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ring for prøvekjøring
              </a>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, scale: 0.985, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="relative min-w-0 w-full"
          >
            <div className="relative min-w-0 overflow-hidden rounded-lg border border-border/80 bg-background">
              <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden bg-muted sm:aspect-[16/11] lg:aspect-[5/4] xl:aspect-[16/10]">
                <Image
                  src="/hoved_bilde_nettside.jpg"
                  alt="Bilutvalg utenfor Borgen Bilsalg"
                  fill
                  className="object-cover object-[center_18%] opacity-90 brightness-[1.03] contrast-[0.98] saturate-[0.82]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  quality={95}
                />
                <div className="pointer-events-none absolute inset-0 bg-background/10" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/30" />
              </div>
            </div>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.34 }}
          className="mt-6 grid min-w-0 overflow-hidden gap-2 border-t border-border pt-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <HeroContactItem
            href="tel:+4798681758"
            icon={<Phone className="h-4 w-4" aria-hidden="true" />}
            label="Ring direkte"
            value="+47 986 81 758"
          />
          <HeroContactItem
            href="mailto:mirnes@borgenbilsalg.no"
            icon={<Mail className="h-4 w-4" aria-hidden="true" />}
            label="E-post"
            value="mirnes@borgenbilsalg.no"
          />
          <HeroContactItem
            icon={<Clock className="h-4 w-4" aria-hidden="true" />}
            label="Åpningstider"
            value="Man-fre 10-17, lør 10-14"
          />
          <HeroContactItem
            href="https://www.google.com/maps/search/?api=1&query=59.268107176997965,11.160173295968743"
            icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
            label="Besøk oss"
            value="Snekkerstubakken 24"
            external
          />
        </MotionDiv>
      </div>
    </section>
  );
}

function HeroContactItem({
  external,
  href,
  icon,
  label,
  value,
}: {
  external?: boolean;
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const className =
    "focus-ring group flex min-w-0 items-center gap-3 rounded-md px-3 py-3 text-left transition-all duration-300 hover:bg-muted active:translate-y-[1px]";

  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-1 block truncate text-sm font-semibold text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}
