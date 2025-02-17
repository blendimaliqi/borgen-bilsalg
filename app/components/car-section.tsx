import Link from "next/link";

export function CarSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Se alle våre biler på Finn.no
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              Klikk her for å se vårt komplette utvalg av kvalitetsbiler med
              detaljerte beskrivelser og bilder
            </p>
            <Link
              href="https://www.finn.no/mobility/search/car?orgId=4471300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-background text-primary px-12 py-4 rounded-xl font-bold text-xl hover:bg-muted transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Vis alle biler
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
