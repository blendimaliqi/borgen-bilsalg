import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { STORE_COORDINATES, STORE_ADDRESS } from "../constants/config";

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${STORE_COORDINATES.formatted}`;

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-border bg-primary text-primary-foreground">
      <div className="page-shell py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/10">
                <Image
                  src="/borgen_logo_nobackground.png"
                  alt=""
                  width={44}
                  height={44}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em]">
                  Borgen Bilsalg
                </p>
                <p className="text-sm text-primary-foreground/70">
                  Snekkerstubakken 24, Borgenhaugen
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="tel:+4798681758"
                className="focus-ring rounded-lg border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:bg-white/15 active:translate-y-[1px]"
              >
                <Phone className="mb-4 h-5 w-5" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                  Telefon
                </p>
                <p className="mt-1 font-semibold">+47 986 81 758</p>
              </a>
              <a
                href="mailto:mirnes@borgenbilsalg.no"
                className="focus-ring rounded-lg border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:bg-white/15 active:translate-y-[1px]"
              >
                <Mail className="mb-4 h-5 w-5" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                  E-post
                </p>
                <p className="mt-1 break-all text-sm font-semibold">
                  mirnes@borgenbilsalg.no
                </p>
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-lg border border-white/10 bg-white/10 p-4 transition-all duration-300 hover:bg-white/15 active:translate-y-[1px]"
              >
                <MapPin className="mb-4 h-5 w-5" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                  Adresse
                </p>
                <p className="mt-1 text-sm font-semibold">
                  {STORE_ADDRESS.street}
                  <br />
                  {STORE_ADDRESS.city}
                </p>
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/10 p-5">
            <div className="mb-5 flex items-center gap-3">
              <Clock className="h-5 w-5" aria-hidden="true" />
              <h2 className="text-lg font-semibold">Åpningstider</h2>
            </div>
            <dl className="space-y-3 text-sm">
              <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                <dt className="text-primary-foreground/70">Mandag - Fredag</dt>
                <dd className="font-semibold">10:00 - 17:00</dd>
              </div>
              <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                <dt className="text-primary-foreground/70">Lørdag</dt>
                <dd className="font-semibold">10:00 - 14:00</dd>
              </div>
              <div className="flex items-center justify-between gap-6">
                <dt className="text-primary-foreground/70">Søndag</dt>
                <dd className="font-semibold">Stengt</dd>
              </div>
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-primary-foreground/70">
              Møter kan avtales utenfor åpningstid. Ring oss for visning eller
              prøvekjøring.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Borgen Bilsalg</p>
          <div className="flex gap-4">
            <Link href="/cars" className="transition-colors hover:text-primary-foreground">
              Biler
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary-foreground">
              Kontakt
            </Link>
            <Link href="/requestcar" className="transition-colors hover:text-primary-foreground">
              Forespør bil
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
