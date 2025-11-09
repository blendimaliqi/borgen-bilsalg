import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { CarSection } from "./components/car-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CarSection />
      <ServicesSection />
    </main>
  );
}
