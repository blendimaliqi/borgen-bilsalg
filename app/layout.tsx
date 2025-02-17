import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  applicationName: "Borgen Bilsalg",
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
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Borgen Bilsalg",
  },
  formatDetection: {
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://borgenbilsalg.no",
    title: "Borgen Bilsalg",
    description: "Din pålitelige partner for kjøp og salg av biler i Norge",
    siteName: "Borgen Bilsalg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
