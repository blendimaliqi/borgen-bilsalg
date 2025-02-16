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
          <Highlight>Borgen Bilsalg</Highlight>
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Din pålitelige partner for kvalitetsbiler i Sarpsborg. Vi tilbyr{" "}
          <Highlight>profesjonell service</Highlight> og
          <Highlight> trygg bilhandel</Highlight>.
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
      content: "+47 123 45 678",
    },
    {
      icon: Mail,
      title: "E-post",
      content: "zulic@borgenbilsalg.no",
    },
    {
      icon: Clock,
      title: "Åpningstider",
      content: ["Man-Fre: 09:00-17:00", "Lør: 10:00-15:00"],
    },
    {
      icon: MapPin,
      title: "Besøk Oss",
      content: ["Borgengata 123", "1721 Sarpsborg"],
    },
  ];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
      className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-6 mt-16 md:mt-24 px-1 md:px-0"
    >
      {contactInfo.map((info, index) => (
        <div
          key={index}
          className="md:col-span-3 bg-card/95 backdrop-blur-sm border border-border/50 rounded-xl p-5 md:p-6 min-h-[160px] md:min-h-[120px] shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 w-full"
        >
          <div className="flex flex-col items-center text-center h-full justify-center">
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
                className={`text-sm md:text-lg text-foreground font-medium ${
                  info.title === "E-post"
                    ? "text-[0.75rem] md:text-base"
                    : "text-sm md:text-2xl"
                }`}
              >
                {info.content}
              </p>
            )}
          </div>
        </div>
      ))}
    </MotionDiv>
  );
}
