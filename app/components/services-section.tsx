"use client";

import { Car, HandCoins, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Våre Tjenester
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Vi tilbyr et bredt spekter av tjenester for å gjøre din
            bilopplevelse så smidig som mulig
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <ServiceCard
            icon={Car}
            title="Kjøp bil hos oss"
            description="Vi tilbyr en trygg og transparent bilkjpøsprosess. vi har et stort utvalg av biler med forskjellige prisklasser. vi hjelper deg med å finne den bilen som passer deg best å  sørger for en smidig of fin handelsopplevelse fra start til slutt."
            imageSrc="/images/services/man-buying-car.jpg"
            imageAlt="Kjøp bil hos Borgen Bilsalg"
            bgColor="bg-gradient-to-br from-primary/5 to-primary/10"
          />

          <ServiceCard
            icon={HandCoins}
            title="Selge bilen din?"
            description="Ønsker du å selge bilen din til oss eller ønsker du at vi skal selge bilen din for deg? Vi gir deg gratis verdivurdering på din bil og et helt uforpliket tilbud."
            imageSrc="/images/services/medium-shot-man-working-as-valet.jpg"
            imageAlt="Selg bil til Borgen Bilsalg"
            bgColor="bg-gradient-to-br from-secondary/5 to-secondary/10"
          />

          <ServiceCard
            icon={ShieldCheck}
            title="Innbytte av bil"
            description="Vil du bytte din nåværende bil mot en nyere eller bare en annen type? vi gir deg en rettferdig vurdering av din bil og hjelper deg å finne den perfekte erstatningen. Med vår innbytteordning blir overgangen til ny bil både enkel og økonomisk fordelaktig."
            imageSrc="/images/services/close-up-sales-manager-black-suit-selling-car-customer.jpg"
            imageAlt="Innbytte av bil hos Borgen Bilsalg"
            bgColor="bg-gradient-to-br from-accent/5 to-accent/10"
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
  bgColor,
}: ServiceCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${bgColor}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 flex-1">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-xl">
              <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            {description}
          </p>
        </div>

        <div className="relative h-[200px] md:h-[250px] w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
}
