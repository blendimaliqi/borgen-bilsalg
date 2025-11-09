"use client";

import { useState, useEffect } from "react";
import { MotionDiv, MotionP } from "./motion-wrapper";
import Image from "next/image";
import { ContactCards } from "./ContactCards";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-white min-h-screen"
      >
        {/* Background car image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hoved_bilde_nettside.jpg"
            alt="Borgen Bilsalg showroom with actual inventory"
            fill
            className="object-cover object-[center_5%] brightness-[0.85]"
            priority
            sizes="100vw"
            quality={95}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 pb-0 pt-[27rem]">
          <div className="max-w-4xl mx-auto mb-12">
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              Kvalitetsbiler i Sarpsborg
            </MotionP>

            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white mb-10 max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
            >
              Din pålitelige partner for profesjonell service og trygg bilhandel
            </MotionP>

            {/* CTA buttons */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/cars"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 text-base font-medium hover:bg-gray-100 transition-colors"
              >
                Se våre biler
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 text-base font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                Kontakt oss
              </Link>
            </MotionDiv>
          </div>

          {/* Contact Cards - Desktop only */}
          <div className="w-full px-0 hidden md:block">
            <ContactCards />
          </div>

          {/* Compact Contact Info - Mobile only */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full flex flex-col gap-3 md:hidden"
          >
            <a
              href="tel:+4798681758"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 p-3 hover:bg-white/20 transition-colors"
            >
              <Phone className="h-4 w-4 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">+47 986 81 758</span>
            </a>
            <a
              href="mailto:mirnes@borgenbilsalg.no"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 p-3 hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4 text-white flex-shrink-0" />
              <span className="text-white text-sm font-medium">mirnes@borgenbilsalg.no</span>
            </a>
          </MotionDiv>
        </div>
      </MotionDiv>
    </>
  );
}
