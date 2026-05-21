"use client";

import { useEffect, useRef, useState } from "react";
import { AlertCircle, Car, CheckCircle, Loader2, Send, User } from "lucide-react";
import { MotionDiv } from "./motion-wrapper";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type SubmitStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20";

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (status?.type === "success") {
      const timer = setTimeout(() => setStatus(null), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      setStatus({
        type: "success",
        message: "Takk for forespørselen. Vi kontakter deg så snart som mulig.",
      });
      formRef.current?.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Noe gikk galt. Prøv igjen, eller ring oss direkte.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
      <MotionDiv
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 max-w-3xl"
      >
        <p className="eyebrow mb-3">Bilforespørsel</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
          Fortell oss hva du leter etter
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Send inn ønskene dine, så tar vi kontakt når vi finner en bil som
          passer budsjett, behov og bruk.
        </p>
      </MotionDiv>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <FormPanel
            icon={<User className="h-5 w-5" aria-hidden="true" />}
            title="Kontaktinformasjon"
            description="Vi bruker dette kun for å følge opp forespørselen."
          >
            <Field label="Navn" htmlFor="customerName" required>
              <input
                type="text"
                id="customerName"
                name="customerName"
                placeholder="Ditt navn"
                required
                className={fieldClass}
              />
            </Field>
            <Field label="E-postadresse" htmlFor="customerEmail" required>
              <input
                type="email"
                id="customerEmail"
                name="customerEmail"
                placeholder="din@epost.no"
                required
                className={fieldClass}
              />
            </Field>
            <Field label="Telefonnummer" htmlFor="customerPhone">
              <input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                placeholder="+47 986 81 758"
                className={fieldClass}
              />
            </Field>
          </FormPanel>

          <FormPanel
            icon={<Car className="h-5 w-5" aria-hidden="true" />}
            title="Bilønsker"
            description="Jo mer konkret du er, jo bedre kan vi filtrere aktuelle biler."
          >
            <Field label="Merke og modell" htmlFor="merke">
              <input
                type="text"
                id="merke"
                name="merke"
                placeholder="Mercedes-Benz E-klasse, Volvo XC60 ..."
                className={fieldClass}
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Fra pris" htmlFor="minPris">
                <input
                  type="text"
                  id="minPris"
                  name="minPris"
                  placeholder="150 000 kr"
                  className={fieldClass}
                />
              </Field>
              <Field label="Til pris" htmlFor="maxPris">
                <input
                  type="text"
                  id="maxPris"
                  name="maxPris"
                  placeholder="250 000 kr"
                  className={fieldClass}
                />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Årsmodell" htmlFor="arsmodell">
                <input
                  type="text"
                  id="arsmodell"
                  name="arsmodell"
                  placeholder="2020 eller nyere"
                  className={fieldClass}
                />
              </Field>
              <Field label="Maks kilometer" htmlFor="maxKilometer">
                <input
                  type="text"
                  id="maxKilometer"
                  name="maxKilometer"
                  placeholder="50 000 km"
                  className={fieldClass}
                />
              </Field>
            </div>
          </FormPanel>
        </div>

        <FormPanel
          title="Preferanser"
          description="Detaljer som gjør søket mer presist."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Field label="Drivstoff" htmlFor="drivstoff">
              <select id="drivstoff" name="drivstoff" className={fieldClass}>
                <option value="">Velg drivstoff</option>
                <option value="Bensin">Bensin</option>
                <option value="Diesel">Diesel</option>
                <option value="EL">EL</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </Field>
            <Field label="Karosseri" htmlFor="karosseri">
              <input
                type="text"
                id="karosseri"
                name="karosseri"
                placeholder="SUV, stasjonsvogn ..."
                className={fieldClass}
              />
            </Field>
            <Field label="Girkasse" htmlFor="girkasse">
              <input
                type="text"
                id="girkasse"
                name="girkasse"
                placeholder="Automat"
                className={fieldClass}
              />
            </Field>
            <Field label="Hjuldrift" htmlFor="hjuldrift">
              <input
                type="text"
                id="hjuldrift"
                name="hjuldrift"
                placeholder="4WD"
                className={fieldClass}
              />
            </Field>
          </div>

          <Field label="Annen informasjon eller ønsker" htmlFor="message">
            <textarea
              id="message"
              name="message"
              placeholder="Fortell oss om utstyr, farge, innbyttebil eller andre ønsker."
              rows={5}
              className={cn(fieldClass, "resize-none")}
            />
          </Field>
        </FormPanel>

        <div className="flex flex-col gap-4 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <div aria-live="polite">
            {status ? (
              <div
                className={cn(
                  "flex items-start gap-3 text-sm font-medium",
                  status.type === "success" ? "text-emerald-700" : "text-destructive"
                )}
              >
                {status.type === "success" ? (
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                )}
                <span>{status.message}</span>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                Vi svarer normalt innen neste virkedag.
              </p>
            )}
          </div>

          <Button type="submit" size="lg" disabled={isLoading} className="shrink-0">
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <Send className="h-4 w-4" aria-hidden="true" />
            )}
            {isLoading ? "Sender" : "Send forespørsel"}
          </Button>
        </div>
      </form>
    </section>
  );
}

function FormPanel({
  children,
  description,
  icon,
  title,
}: {
  children: React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  title: string;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border border-border bg-card p-5 shadow-[0_18px_45px_-36px_hsl(var(--foreground))] md:p-6"
    >
      <div className="mb-6 flex items-start gap-3">
        {icon ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
            {icon}
          </span>
        ) : null}
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {title}
          </h3>
          {description ? (
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </MotionDiv>
  );
}

function Field({
  children,
  htmlFor,
  label,
  required,
}: {
  children: React.ReactNode;
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-foreground">
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </label>
      {children}
    </div>
  );
}
