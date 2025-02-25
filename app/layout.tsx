import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Borgen Bilsalg",
  description:
    "Borgen Bilsalg - Din pålitelige partner for kjøp og salg av bilder i Norge. Vi tilbyr et bredt utvalg av brukte biler.",
  keywords: [
    "bilforhandler",
    "forhandler",
    "bil",
    "bruktbil",
    "nybil",
    "bil til salgs",
    "Borgen Bilsalg",
    "bilsalg norge",
    "bilhandel",
  ],
  authors: [{ name: "Borgen Bilsalg" }],
  creator: "Borgen Bilsalg",
  publisher: "Borgen Bilsalg",
  metadataBase: new URL("https://borgenbilsalg.no"),
  alternates: {
    canonical: "https://borgenbilsalg.no",
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://borgenbilsalg.no",
    title: "Borgen Bilsalg",
    description: "Din pålitelige partner for kjøp og salg av biler i Norge",
    siteName: "Borgen Bilsalg",
    images: [
      {
        url: "https://borgenbilsalg.no/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Borgen Bilsalg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borgen Bilsalg",
    description: "Din pålitelige partner for kjøp og salg av biler i Norge",
    images: ["https://borgenbilsalg.no/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification-code",
  },
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Borgen Bilsalg",
    image: "https://borgenbilsalg.no/logo.png",
    "@id": "https://borgenbilsalg.no",
    url: "https://borgenbilsalg.no",
    telephone: "+4712345678",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Eksempelveien 123",
      addressLocality: "Sarpsborg",
      postalCode: "1710",
      addressCountry: "NO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 59.2839,
      longitude: 11.1094,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "15:00",
      },
    ],
    sameAs: ["https://www.finn.no/mobility/search/car?orgId=4471300"],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <footer className="bg-muted py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Borgen Bilsalg. Alle rettigheter
              reservert.
            </p>
            <p className="mt-2">
              <a
                href="https://www.finn.no/mobility/search/car?orgId=4471300"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition"
              >
                Se våre biler på Finn.no
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
