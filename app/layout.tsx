import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Providers from "./providers";
import { Footer } from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

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
    streetAddress: "Borgenvegen 123",
    addressLocality: "Oslo",
    postalCode: "0123",
    addressCountry: "NO",
  },
  telephone: "+47 12345678",
  url: "https://borgenbilsalg.no",
  openingHours: "Mo-Fr 09:00-17:00",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className={inter.className}>
        <Providers>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <Navbar />
          <main className="min-h-screen pt-[72px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
