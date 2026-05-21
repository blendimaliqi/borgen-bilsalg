"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { ContactCards } from "../components/ContactCards";
import { ContactForm } from "../components/ContactForm";
import { MotionDiv, MotionH1, MotionP } from "../components/motion-wrapper";
import { STORE_ADDRESS, STORE_COORDINATES } from "../constants/config";

const mapSrc = `https://maps.google.com/maps?q=${STORE_COORDINATES.formatted}&t=m&z=16&ie=UTF8&iwloc=&output=embed`;

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden bg-background">
      <section className="relative border-b border-border py-16 md:py-24">
        <div className="absolute inset-0 -z-10 noise-layer opacity-40" />
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <MotionP
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="eyebrow mb-4"
              >
                Kontakt
              </MotionP>
              <MotionH1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
              >
                Snakk med oss før du bestemmer deg
              </MotionH1>
            </div>
            <MotionP
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Ring, send e-post eller besøk oss i Borgenhaugen. Vi hjelper med
              prøvekjøring, innbytte, finansiering og konkrete bilønsker.
            </MotionP>
          </div>

          <div className="mt-10">
            <ContactCards variant="light" />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="page-shell">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="rounded-lg border border-border bg-card p-6 md:p-8"
            >
              <p className="eyebrow mb-4">Besøk oss</p>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Snekkerstubakken 24
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Vi holder til på {STORE_ADDRESS.street}, {STORE_ADDRESS.city}.
                Det er god parkering og enkelt å avtale visning av aktuelle biler.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${STORE_COORDINATES.formatted}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-start gap-3 rounded-md border border-border p-4 transition-all duration-300 hover:border-primary hover:bg-muted"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-foreground">
                      Få veibeskrivelse
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Åpnes i Google Maps
                    </span>
                  </span>
                </a>
                <a
                  href="tel:+4798681758"
                  className="focus-ring flex items-start gap-3 rounded-md border border-border p-4 transition-all duration-300 hover:border-primary hover:bg-muted"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block font-semibold text-foreground">
                      +47 986 81 758
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Raskeste vei til prøvekjøring
                    </span>
                  </span>
                </a>
                <a
                  href="mailto:mirnes@borgenbilsalg.no"
                  className="focus-ring flex items-start gap-3 rounded-md border border-border p-4 transition-all duration-300 hover:border-primary hover:bg-muted"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>
                    <span className="block break-all font-semibold text-foreground">
                      mirnes@borgenbilsalg.no
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Send spørsmål om bil, innbytte eller finansiering
                    </span>
                  </span>
                </a>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="min-h-[420px] overflow-hidden rounded-lg border border-border bg-card"
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Borgen Bilsalg kart"
                className="h-full min-h-[420px] w-full"
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
