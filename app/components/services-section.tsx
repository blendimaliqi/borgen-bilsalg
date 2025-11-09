"use client";

import { Car, HandCoins, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Våre Tjenester
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Vi tilbyr et bredt spekter av tjenester for å gjøre din
            bilopplevelse så smidig som mulig
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Car}
            title="Kjøp bil hos oss"
            description="Vi tilbyr en trygg og transparent bilkjpøsprosess. vi har et stort utvalg av biler med forskjellige prisklasser. vi hjelper deg med å finne den bilen som passer deg best å  sørger for en smidig of fin handelsopplevelse fra start til slutt."
            imageSrc="/images/services/man-buying-car.jpg"
            imageAlt="Kjøp bil hos Borgen Bilsalg"
          />

          <ServiceCard
            icon={HandCoins}
            title="Selge bilen din?"
            description="Ønsker du å selge bilen din til oss eller ønsker du at vi skal selge bilen din for deg? Vi gir deg gratis verdivurdering på din bil og et helt uforpliket tilbud."
            imageSrc="/images/services/medium-shot-man-working-as-valet.jpg"
            imageAlt="Selg bil til Borgen Bilsalg"
          />

          <ServiceCard
            icon={ShieldCheck}
            title="Innbytte av bil"
            description="Vil du bytte din nåværende bil mot en nyere eller bare en annen type? vi gir deg en rettferdig vurdering av din bil og hjelper deg å finne den perfekte erstatningen. Med vår innbytteordning blir overgangen til ny bil både enkel og økonomisk fordelaktig."
            imageSrc="/images/services/close-up-sales-manager-black-suit-selling-car-customer.jpg"
            imageAlt="Innbytte av bil hos Borgen Bilsalg"
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
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
}: ServiceCardProps) {
  return (
    <div className="bg-white overflow-hidden group">
      <div className="flex flex-col h-full">
        <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="p-8 flex-1 border-l border-r border-b border-gray-200">
          <div className="mb-4">
            <Icon className="h-6 w-6 text-gray-900" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
            {title}
          </h3>

          <p className="text-gray-600 text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
