import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { MotionDiv } from "./motion-wrapper";
import { STORE_COORDINATES, STORE_ADDRESS } from "../constants/config";

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
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {contactInfo.map((info, index) => {
          const CardWrapper = info.href ? "a" : "div";
          const cardProps = info.href
            ? {
                href: info.href,
                target: info.href.includes("google.com") ? "_blank" : undefined,
                rel: info.href.includes("google.com")
                  ? "noopener noreferrer"
                  : undefined,
                className: `flex flex-col items-center text-center group cursor-pointer p-4 backdrop-blur-sm border shadow-md transition-all ${
                  variant === "dark"
                    ? "bg-black/30 border-white/20 hover:bg-black/40 hover:border-white/30"
                    : "bg-card/95 border-border hover:bg-card hover:border-primary/50"
                }`,
              }
            : {
                className: `flex flex-col items-center text-center group relative p-4 backdrop-blur-sm border shadow-md ${
                  variant === "dark"
                    ? "bg-black/30 border-white/20"
                    : "bg-card/95 border-border"
                }`,
              };

          return (
            <CardWrapper key={index} {...cardProps}>
              <div
                className={`backdrop-blur-sm p-3 mb-3 border group-hover:scale-110 transition-all ${
                  variant === "dark"
                    ? "bg-white/10 border-white/20 group-hover:bg-white/20"
                    : "bg-primary/10 border-primary/30 group-hover:bg-primary/20"
                }`}
              >
                <info.icon
                  className={`h-5 w-5 flex-shrink-0 ${
                    variant === "dark" ? "text-white" : "text-primary"
                  }`}
                />
              </div>
              <div className="min-w-0">
                <h3
                  className={`text-xs font-bold mb-1.5 uppercase tracking-wide ${
                    variant === "dark" ? "text-white" : "text-foreground"
                  }`}
                >
                  {info.title}
                </h3>
                {Array.isArray(info.content) ? (
                  info.content.map((line, i) => (
                    <p
                      key={i}
                      className={`text-sm leading-tight transition-colors ${
                        variant === "dark" ? "text-white/90" : "text-foreground"
                      }`}
                    >
                      {line}
                    </p>
                  ))
                ) : (
                  <p
                    className={`transition-colors ${
                      info.title === "E-post"
                        ? "text-xs break-all"
                        : "text-sm font-semibold"
                    } ${variant === "dark" ? "text-white/90" : "text-foreground"}`}
                  >
                    {info.content}
                  </p>
                )}
                {info.tooltip && (
                  <p
                    className={`text-xs mt-1.5 ${
                      variant === "dark" ? "text-white/70" : "text-muted-foreground"
                    }`}
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
