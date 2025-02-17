import { MotionDiv, MotionP } from "./motion-wrapper";
import { Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { ContactCards } from "./ContactCards";

export function HeroSection() {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-center space-y-0 px-0 md:px-0"
      >
        <div className="relative w-full max-w-[75rem] aspect-[1/1] sm:aspect-[3/2] md:h-[40rem] lg:h-[50rem] mx-auto -mb-10 sm:-mb-24 md:-mb-32 lg:-mb-48 -mt-16 sm:-mt-24 md:-mt-32 lg:-mt-48 overflow-hidden rounded-[1.5rem] md:rounded-[3rem]">
          <Image
            src="/borgen_logo_nobackground.png"
            alt="Borgen Bilsalg Logo"
            fill
            className="object-contain opacity-100 px-4 sm:p-8 scale-125 sm:scale-100"
            priority
          />
        </div>
        <MotionP
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
        >
          Din pålitelige partner for kvalitetsbiler i Sarpsborg. Vi tilbyr{" "}
          <Highlight>profesjonell service</Highlight> og
          <Highlight> trygg bilhandel </Highlight>
        </MotionP>
      </MotionDiv>

      <ContactCards />
    </>
  );
}
