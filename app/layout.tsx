import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "FinGest - Gestiona tus finanzas personales con inteligencia",
  description: "FinGest es la solución integral para la gestión de tus finanzas personales, combinando tecnología avanzada y un equipo de expertos a tu servicio.",
  keywords: ["finanzas", "tecnología", "gestión financiera", "inteligencia artificial"],
  authors: [{ name: "FinGest Team", url: "https://fingest.com" }],
  openGraph: {
    title: "FinGest - Gestiona tus finanzas personales con inteligencia",
    description: "FinGest es la solución integral para la gestión de tus finanzas personales, combinando tecnología avanzada y un equipo de expertos a tu servicio.",
    // url: "https://fingest.com",
    // siteName: "FinGest",
    // images: [
    //   {
    //     url: "https://fingest.com/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "FinGest Open Graph Image",
    //   },
    // ],
    locale: "es_ES",
    type: "website",
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
