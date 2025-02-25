import { MotionDiv, MotionP } from "./motion-wrapper";
import { Highlight } from "../ui/hero-highlight";
import Image from "next/image";
import { ContactCards } from "./ContactCards";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="relative text-center space-y-0 px-0 md:px-0 overflow-hidden"
      >
        {/* Background car image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.finncdn.no/dynamic/1600w/52/52e54c3a-3058-46b9-913f-3931e48db171"
            alt="Borgen Bilsalg showroom with actual inventory"
            fill
            className="object-cover opacity-45 scale-105 hover:scale-110 transition-transform duration-10000"
            priority
            sizes="100vw"
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>

          {/* Add subtle animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-60"></div>
        </div>

        {/* Logo and content */}
        <div className="relative z-10 pt-4 pb-20 md:pt-6 md:pb-28">
          {/* Logo with subtle animation */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
            className="relative w-full max-w-[24rem] aspect-square sm:max-w-[30rem] mx-auto mb-8"
          >
            <Image
              src="/borgen_logo_nobackground.png"
              alt="Borgen Bilsalg Logo"
              fill
              className="object-contain opacity-100 px-4 sm:p-6 scale-125 sm:scale-110 drop-shadow-lg"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1200px) 50vw, 3840px"
              quality={95}
            />
          </MotionDiv>

          {/* Tagline with improved animation */}
          <MotionP
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-xl md:text-3xl text-foreground font-medium px-6 sm:px-8 max-w-[20rem] sm:max-w-xl md:max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
          >
            Din pålitelige partner for <Highlight>kvalitetsbiler</Highlight> i
            Sarpsborg. Vi tilbyr <Highlight>profesjonell service</Highlight> og
            <Highlight> trygg bilhandel</Highlight>
          </MotionP>

          {/* CTA buttons with improved styling and animations */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/cars"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
            >
              Se våre biler
            </Link>
            <Link
              href="#kontakt"
              className="inline-block bg-transparent border-2 border-primary text-primary px-8 py-3 rounded-full font-medium text-lg hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
            >
              Kontakt oss
            </Link>
          </MotionDiv>
        </div>
      </MotionDiv>

      <ContactCards />
    </>
  );
}
