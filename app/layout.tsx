import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Borgen Bilsalg Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Borgen Bilsalg",
    description: "Din pålitelige partner for kjøp og salg av biler i Norge",
    images: ["/android-chrome-512x512.png"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "icon",
      url: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Borgen Bilsalg",
  },
};

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "Borgen Bilsalg",
    url: "https://borgenbilsalg.no",
    description: "Din pålitelige partner for kjøp og salg av biler i Norge",
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
        {children}
      </body>
    </html>
  );
}
