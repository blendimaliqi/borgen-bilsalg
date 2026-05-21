import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Providers from "./providers";
import { Footer } from "./components/footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Borgen Bilsalg",
  description: "Kvalitetsbiler til gode priser",
  openGraph: {
    title: "Borgen Bilsalg",
    description: "Kvalitetsbiler til gode priser",
    url: "https://borgenbilsalg.no",
    siteName: "Borgen Bilsalg",
    images: [
      {
        url: "https://borgenbilsalg.no/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Borgen Bilsalg",
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

// Define structured data for the business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Borgen Bilsalg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Snekkerstubakken 24",
    addressLocality: "Borgenhaugen",
    postalCode: "1738",
    addressCountry: "NO",
  },
  telephone: "+47 98681758",
  url: "https://borgenbilsalg.no",
  openingHours: ["Mo-Fr 10:00-17:00", "Sa 10:00-14:00"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
