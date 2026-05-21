"use client";

import { ContactForm } from "../components/ContactForm";
import { MotionH1, MotionP } from "../components/motion-wrapper";

export default function RequestCarPage() {
  return (
    <main className="overflow-x-hidden bg-background pb-16">
      <section className="border-b border-border py-16 md:py-24">
        <div className="page-shell">
          <MotionP
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="eyebrow mb-4"
          >
            Forespør bil
          </MotionP>
          <MotionH1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
          >
            Vi hjelper deg å finne riktig bil
          </MotionH1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Send inn ønskene dine, så følger vi opp med aktuelle biler fra eget
            utvalg eller kommende innkjøp.
          </p>
        </div>
      </section>
      <div className="pb-4">
        <ContactForm />
      </div>
    </main>
  );
}
