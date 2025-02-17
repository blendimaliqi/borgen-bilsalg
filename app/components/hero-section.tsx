import { MotionDiv, MotionP } from "./motion-wrapper";
import { Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { ContactCards } from "./ContactCards";

export function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0">
        <Image
          src="/garage.jpg"
          alt="Borgen Bilsalg Garage"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative w-full">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <MotionDiv
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm max-w-[70rem] mx-auto rounded-2xl py-4 sm:py-8 px-3 sm:px-4">
              <div className="relative w-full max-w-[75rem] aspect-[2/1] sm:aspect-[3/2] h-[15rem] sm:h-[20rem] md:h-[35rem] mx-auto mt-[-2rem] sm:mt-[-5rem] md:mt-[-10rem] mb-[-2rem] sm:mb-[-4rem] md:mb-[-8rem]">
                <Image
                  src="/borgen_logo_nobackground.png"
                  alt="Borgen Bilsalg Logo"
                  fill
                  className="object-contain opacity-100 px-2 sm:px-4 md:px-8"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 50vw, 3840px"
                  quality={85}
                />
              </div>

              <MotionP
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-base sm:text-lg md:text-3xl text-primary font-medium px-2 sm:px-6 md:px-8 max-w-[20rem] sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed mt-2 sm:mt-4"
              >
                Din pålitelige partner for kvalitetsbiler i Sarpsborg. Vi tilbyr{" "}
                <Highlight>profesjonell service</Highlight> og
                <Highlight> trygg bilhandel </Highlight>
              </MotionP>
            </div>
          </MotionDiv>

          <div className="mt-12">
            <ContactCards />
          </div>
        </div>
      </div>
    </div>
  );
}
