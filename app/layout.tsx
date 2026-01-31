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
  title: "Chuabacca Custom Creations | 3D Printing Gallery",
  description: "Custom 3D printing services in Santa Clarita, CA. High-quality prints for cosplay, functional parts, and creative projects.",
  keywords: ["3D printing", "custom prints", "Santa Clarita", "cosplay", "functional parts"],
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
