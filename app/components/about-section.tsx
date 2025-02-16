import Image from "next/image";

export function AboutSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-8 text-foreground">Om Oss</h2>
        <p className="text-xl text-muted-foreground leading-relaxed font-medium max-w-3xl mx-auto">
          En familiebedrift i Sarpsborg med over 20 års erfaring innen bilsalg.
          Vi gir deg personlig service og ærlige råd i en trygg og transparent
          prosess.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AboutContent />
        <AboutImages />
      </div>
    </div>
  );
}

function AboutContent() {
  return (
    <div className="space-y-8 order-2 md:order-1">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">Vår Historie</h3>
        <p className="text-muted-foreground leading-relaxed">
          Siden 2004 har Borgen Bilsalg vært en betrodd aktør i bilbransjen. Det
          som startet som en liten familiebedrift, har vokst til å bli en av
          Sarpsborgs mest respekterte bilforhandlere.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">Våre Verdier</h3>
        <ul className="space-y-3">
          <ValueItem text="Ærlighet og transparens i alle transaksjoner" />
          <ValueItem text="Kvalitet i hvert eneste kjøretøy" />
          <ValueItem text="Personlig service og oppfølging" />
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">Vårt Team</h3>
        <p className="text-muted-foreground leading-relaxed">
          Med vår dedikerte stab av erfarne bileksperter og
          kundeservicemedarbeidere, står vi klare til å hjelpe deg med å finne
          den perfekte bilen eller få best mulig pris for din nåværende bil.
        </p>
      </div>
    </div>
  );
}

function ValueItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-muted-foreground">
      <div className="w-2 h-2 bg-accent rounded-sm rotate-45" />
      {text}
    </li>
  );
}

function AboutImages() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
      alt: "Vår moderne bilbutikk",
    },
    {
      src: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=800&auto=format&fit=crop",
      alt: "Vårt dedikerte team",
    },
    {
      src: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop",
      alt: "Vårt profesjonelle verksted",
    },
    {
      src: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop",
      alt: "Kundetilfredshet er vår prioritet",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
      {images.map((image, index) => (
        <div
          key={index}
          className="aspect-square relative overflow-hidden rounded-xl shadow-lg"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
}
