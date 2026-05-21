import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { MotionDiv } from "./motion-wrapper";
import { STORE_COORDINATES, STORE_ADDRESS } from "../constants/config";
import { cn } from "@/lib/utils";

interface ContactCardsProps {
  variant?: "light" | "dark";
}

export function ContactCards({ variant = "dark" }: ContactCardsProps) {
  const contactInfo = [
    {
      icon: Phone,
      title: "Ring Direkte",
      content: "+47 986 81 758",
      href: "tel:+4798681758",
    },
    {
      icon: Mail,
      title: "E-post",
      content: "mirnes@borgenbilsalg.no",
      href: "mailto:mirnes@borgenbilsalg.no",
    },
    {
      icon: Clock,
      title: "Åpningstider",
      content: ["Man-Fre: 10:00-17:00", "Lør: 10:00-14:00"],
      tooltip: "Møter kan avtales utover åpningstider",
    },
    {
      icon: MapPin,
      title: "Besøk Oss",
      content: [STORE_ADDRESS.street, STORE_ADDRESS.city],
      href: `https://www.google.com/maps/search/?api=1&query=${STORE_COORDINATES.formatted}`,
    },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="py-4"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((info, index) => {
          const CardWrapper = info.href ? "a" : "div";
          const cardProps = info.href
            ? {
                href: info.href,
                target: info.href.includes("google.com") ? "_blank" : undefined,
                rel: info.href.includes("google.com")
                  ? "noopener noreferrer"
                  : undefined,
                className: cn(
                  "focus-ring ease-premium group flex min-h-[140px] flex-col justify-between rounded-lg border p-5 text-left transition-all duration-300 active:translate-y-[1px]",
                  variant === "dark"
                    ? "border-white/15 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md hover:bg-white/15"
                    : "border-border bg-card text-foreground shadow-[0_18px_45px_-36px_hsl(var(--foreground))] hover:border-primary"
                ),
              }
            : {
                className: cn(
                  "group relative flex min-h-[140px] flex-col justify-between rounded-lg border p-5 text-left",
                  variant === "dark"
                    ? "border-white/15 bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md"
                    : "border-border bg-card text-foreground shadow-[0_18px_45px_-36px_hsl(var(--foreground))]"
                ),
              };

          return (
            <CardWrapper key={index} {...cardProps}>
              <div className="mb-5 flex items-center justify-between gap-4">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-md border transition-transform duration-300 group-hover:-translate-y-0.5",
                    variant === "dark"
                      ? "border-white/15 bg-white/10"
                      : "border-border bg-muted"
                  )}
                >
                  <info.icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                </div>
                <span
                  className={cn(
                    "h-px flex-1",
                    variant === "dark" ? "bg-white/15" : "bg-border"
                  )}
                />
              </div>
              <div className="min-w-0">
                <h3
                  className={cn(
                    "mb-2 text-xs font-semibold uppercase tracking-[0.18em]",
                    variant === "dark" ? "text-white/70" : "text-muted-foreground"
                  )}
                >
                  {info.title}
                </h3>
                {Array.isArray(info.content) ? (
                  info.content.map((line, i) => (
                    <p
                      key={i}
                      className="text-sm font-semibold leading-relaxed transition-colors"
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <p
                    className={cn(
                      "font-semibold transition-colors",
                      info.title === "E-post" ? "break-all text-sm" : "text-base"
                    )}
                  >
                    {info.content}
                  </p>
                )}
                {info.tooltip && (
                  <p
                    className={cn(
                      "mt-2 text-xs leading-relaxed",
                      variant === "dark" ? "text-white/60" : "text-muted-foreground"
                    )}
                  >
                    {info.tooltip}
                  </p>
                )}
              </div>
            </CardWrapper>
          );
        })}
      </div>
    </MotionDiv>
  );
}
