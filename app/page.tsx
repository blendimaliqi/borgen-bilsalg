import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { CarSection } from "./components/car-section";
import { HeroHighlight } from "./components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroHighlight>
        <HeroSection />
      </HeroHighlight>
      <CarSection />
      <ServicesSection />
    </main>
  );
}
