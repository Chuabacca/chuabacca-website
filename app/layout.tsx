import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const omnium = Orbitron({
  variable: "--font-omnium",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Chuabacca Custom Creations | Design and 3D Printing Services",
  description: "Custom 3D design and printing services in Santa Clarita, CA. High-quality prints for cosplay, functional parts, and creative projects.",
  keywords: ["3D printing", "custom prints", "custom design", "Bambu Labs", "Santa Clarita", "cosplay", "functional parts"],
  openGraph: {
    title: "Chuabacca Custom Creations | Design and 3D Printing Services",
    description: "Custom 3D design and printing services in Santa Clarita, CA. High-quality prints for cosplay, functional parts, and creative projects.",
    url: "https://chuabacca.com",
    siteName: "Chuabacca Custom Creations",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chuabacca Custom Creations - Design and 3D Printing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chuabacca Custom Creations | Design and 3D Printing Services",
    description: "Custom 3D design and printing services in Santa Clarita, CA. High-quality prints for cosplay, functional parts, and creative projects.",
    images: ["/og-image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${omnium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
