"use client";

import { ContactForm } from "../components/ContactForm";

export default function RequestCarPage() {
  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ContactForm />
      </div>
    </main>
  );
}
