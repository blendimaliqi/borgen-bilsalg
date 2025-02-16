import { Car, HandCoins } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">
          Våre Tjenester
        </h2>

        <div className="space-y-12 md:space-y-24">
          <ServiceCard
            icon={Car}
            title="Kjøp Bil"
            description="Vi tilbyr en trygg og transparent bilkjøpsprosess. Hver bil i vår kolleksjon er nøye inspisert og kvalitetssikret. Vi hjelper deg med finansiering og sørger for en smidig handleopplevelse fra start til slutt."
            imageSrc="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
            imageAlt="Kjøp bil hos Borgen Bilsalg"
          />

          <div className="w-full h-[2px] bg-border hidden md:block" />

          <ServiceCard
            icon={HandCoins}
            title="Selg Bil"
            description="Ønsker du å selge din bil? Vi tilbyr en enkel og effektiv salgsprosess med gratis verdivurdering og konkurransedyktige priser. Vårt erfarne team sørger for en rask og problemfri transaksjon."
            imageSrc="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop"
            imageAlt="Selg bil til Borgen Bilsalg"
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  icon: React.ComponentType<any>;
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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-3">
        <h3 className="text-2xl md:text-3xl font-medium flex items-center gap-3">
          <Icon className="h-6 w-6 md:h-8 md:w-8 text-accent" />
          {title}
        </h3>
      </div>

      <div className="md:col-span-5">
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors cursor-pointer group">
          Les mer
          <span className="group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>

      <div className="md:col-span-4 aspect-[4/3] relative overflow-hidden rounded-xl">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
