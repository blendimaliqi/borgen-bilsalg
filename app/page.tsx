import { HeroHighlight } from "./ui/hero-highlight";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { CarSection } from "./components/car-section";

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
