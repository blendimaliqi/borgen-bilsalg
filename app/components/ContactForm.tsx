"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { MotionDiv } from "./motion-wrapper";
import { User, Car, Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("✅ Forespørsel sendt!");
        formRef.current?.reset();
      } else {
        setStatus("❌ Noe gikk galt. Prøv igjen.");
      }
    } catch {
      setStatus("❌ Noe gikk galt. Prøv igjen.");
    }
  };

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Send oss en forespørsel
        </h2>
        <p className="text-lg text-muted-foreground">
          Fant du ikke bilen du leter etter? Fyll ut skjemaet under med dine
          ønsker og behov, så kontakter vi deg så fort som vi finner en bil som
          passer dine behov
        </p>
      </MotionDiv>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Customer Information Card - Wider */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <User className="h-5 w-5 text-primary" />
                  Kontaktinformasjon
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Navn *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="Skriv inn ditt navn"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="customerEmail"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-postadresse *
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    placeholder="din@epost.no"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="customerPhone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="customerPhone"
                    name="customerPhone"
                    placeholder="+47 123 45 678"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>
              </CardContent>
            </Card>
          </MotionDiv>

          {/* Car Preferences Card */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="lg:col-span-3"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Car className="h-5 w-5 text-primary" />
                  Bilønsker
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="merke"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Merke
                    </label>
                    <input
                      type="text"
                      id="merke"
                      name="merke"
                      placeholder="f.eks. Mercedes Benz E-klasse"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ønsket pris
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="minPris"
                          className="block text-xs text-muted-foreground mb-1"
                        >
                          Fra pris
                        </label>
                        <input
                          type="text"
                          id="minPris"
                          name="minPris"
                          placeholder="f.eks. 150 000 kr"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="maxPris"
                          className="block text-xs text-muted-foreground mb-1"
                        >
                          Til pris
                        </label>
                        <input
                          type="text"
                          id="maxPris"
                          name="maxPris"
                          placeholder="f.eks. 250 000 kr"
                          className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="arsmodell"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Årsmodell
                    </label>
                    <input
                      type="text"
                      id="arsmodell"
                      name="arsmodell"
                      placeholder="f.eks. 2020"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maxKilometer"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Maks kilometer
                    </label>
                    <input
                      type="text"
                      id="maxKilometer"
                      name="maxKilometer"
                      placeholder="f.eks. 50 000 km"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Ytterligere preferanser</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label
                    htmlFor="drivstoff"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Drivstoff
                  </label>
                  <select
                    id="drivstoff"
                    name="drivstoff"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  >
                    <option value="">Velg drivstoff</option>
                    <option value="Bensin">Bensin</option>
                    <option value="Diesel">Diesel</option>
                    <option value="EL">EL</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="karosseri"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Karosseri
                  </label>
                  <input
                    type="text"
                    id="karosseri"
                    name="karosseri"
                    placeholder="f.eks. SUV"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="girkasse"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Girkasse
                  </label>
                  <input
                    type="text"
                    id="girkasse"
                    name="girkasse"
                    placeholder="f.eks. Automat"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="hjuldrift"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Hjuldrift
                  </label>
                  <input
                    type="text"
                    id="hjuldrift"
                    name="hjuldrift"
                    placeholder="f.eks. 4WD"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Annen informasjon eller ønsker
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Fortell oss mer om hva du leter etter, spesielle ønsker eller andre detaljer..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                />
              </div>
            </CardContent>
          </Card>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center space-y-4"
        >
          <Button type="submit" size="lg" className="px-8 py-3 text-base">
            <Send className="mr-2 h-4 w-4" />
            Send forespørsel
          </Button>
          {status && (
            <p
              className={`text-sm font-medium ${
                status.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </MotionDiv>
      </form>
    </div>
  );
}
