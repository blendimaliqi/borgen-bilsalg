import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";
import { Highlight } from "../ui/hero-highlight";

export function HeroSection() {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-center space-y-6 px-4 md:px-0"
      >
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
        >
          <Highlight>Borgen Bilsalg AS</Highlight>
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Din pålitelige partner for kvalitetsbiler i Sarpsborg. Vi tilbyr{" "}
          <Highlight>profesjonell service</Highlight> og
          <Highlight> trygg bilhandel </Highlight>.
        </MotionP>
      </MotionDiv>

      <ContactCards />
    </>
  );
}

function ContactCards() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Ring Direkte",
      content: "+47 986 81 758",
      href: "tel:+4712345678",
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
      content: ["Industriveien 29", "1725 Sarpsborg"],
      href: "https://www.google.com/maps/place/Industriveien+29,+1725+Sarpsborg/@59.27710435279952,11.09293157944697,17z",
    },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 mt-16 md:mt-24 px-1 md:px-0 pb-16 md:pb-24"
    >
      {contactInfo.map((info, index) => {
        const CardWrapper = info.href ? "a" : "div";
        const cardProps = info.href
          ? {
              href: info.href,
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "relative md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 min-h-[180px] md:min-h-[140px] w-full md:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer",
            }
          : {
              className:
                "relative md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 min-h-[180px] md:min-h-[140px] w-full md:w-auto shadow-lg hover:shadow-xl transition-all hover:-translate-y-1",
            };

        return (
          <CardWrapper key={index} {...cardProps}>
            <div className="flex flex-col items-center text-center h-full justify-center group relative">
              <info.icon className="h-7 w-7 md:h-8 md:w-8 text-accent mb-3 md:mb-2" />
              <h3 className="text-base md:text-2xl text-primary font-medium mb-3 md:mb-2">
                {info.title}
              </h3>
              {Array.isArray(info.content) ? (
                info.content.map((line, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-lg text-foreground font-medium leading-tight"
                  >
                    {line}
                  </p>
                ))
              ) : (
                <p
                  className={`text-foreground font-medium ${
                    info.title === "E-post"
                      ? "text-[0.65rem] sm:text-[0.75rem] md:text-xl lg:text-2xl whitespace-nowrap overflow-hidden"
                      : "text-sm sm:text-base md:text-xl lg:text-2xl"
                  }`}
                >
                  {info.content}
                </p>
              )}
              {info.tooltip && (
                <div
                  className="fixed md:absolute top-[105%] md:top-auto md:bottom-0 left-1/2 transform -translate-x-1/2 md:translate-y-[120%] 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                  bg-accent/95 text-accent-foreground px-4 py-2 rounded-lg text-sm 
                  whitespace-normal md:whitespace-nowrap max-w-[200px] md:max-w-none text-center
                  pointer-events-none shadow-lg z-[99999]"
                >
                  {info.tooltip}
                  <div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 rotate-45 
                    w-2 h-2 bg-accent/95"
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
