import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { MotionDiv } from "./motion-wrapper";

export function ContactCards() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Ring Direkte",
      content: "+47 986 81 758",
      href: "tel:+4798681758",
      bgColor: "from-primary/10 to-primary/20",
    },
    {
      icon: Mail,
      title: "E-post",
      content: "mirnes@borgenbilsalg.no",
      href: "mailto:mirnes@borgenbilsalg.no",
      bgColor: "from-secondary/10 to-secondary/20",
    },
    {
      icon: Clock,
      title: "Åpningstider",
      content: ["Man-Fre: 10:00-17:00", "Lør: 10:00-14:00"],
      tooltip: "Møter kan avtales utover åpningstider",
      bgColor: "from-accent/10 to-accent/20",
    },
    {
      icon: MapPin,
      title: "Besøk Oss",
      content: ["Industriveien 29", "1725 Sarpsborg"],
      href: "https://www.google.com/maps/search/?api=1&query=59.277174491606935,11.092749118100468",
      bgColor: "from-primary/10 to-secondary/20",
    },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8 max-w-7xl mx-auto -mt-4 md:-mt-6 relative z-10"
    >
      {contactInfo.map((info, index) => {
        const CardWrapper = info.href ? "a" : "div";
        const cardProps = info.href
          ? {
              href: info.href,
              target: info.href.includes("google.com") ? "_blank" : undefined,
              rel: info.href.includes("google.com")
                ? "noopener noreferrer"
                : undefined,
              className: `relative bg-gradient-to-br ${info.bgColor} backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer`,
            }
          : {
              className: `relative bg-gradient-to-br ${info.bgColor} backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`,
            };

        return (
          <CardWrapper key={index} {...cardProps}>
            <div className="flex flex-col items-center text-center h-full justify-center group relative">
              <div className="bg-background/70 p-4 rounded-full mb-4 md:mb-5 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <info.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl text-foreground font-bold mb-3 md:mb-4">
                {info.title}
              </h3>
              {Array.isArray(info.content) ? (
                info.content.map((line, i) => (
                  <p
                    key={i}
                    className="text-base md:text-lg text-foreground/90 font-medium leading-tight"
                  >
                    {line}
                  </p>
                ))
              ) : (
                <p
                  className={`text-foreground/90 font-medium ${
                    info.title === "E-post"
                      ? "text-sm sm:text-base md:text-lg break-all"
                      : "text-base sm:text-lg md:text-xl"
                  }`}
                >
                  {info.content}
                </p>
              )}
              {info.tooltip && (
                <div
                  className="fixed md:absolute top-[105%] md:top-auto md:bottom-0 left-1/2 transform -translate-x-1/2 md:translate-y-[120%] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                    bg-background/90 backdrop-blur-sm text-foreground px-5 py-3 rounded-xl text-sm md:text-base
                    whitespace-normal md:whitespace-nowrap max-w-[250px] md:max-w-none text-center
                    pointer-events-none shadow-xl z-[99999]"
                >
                  {info.tooltip}
                  <div
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45 
                      w-3 h-3 bg-background/90"
                  ></div>
                </div>
              )}
            </div>
          </CardWrapper>
        );
      })}
    </MotionDiv>
  );
}
