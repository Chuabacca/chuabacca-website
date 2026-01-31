"use client";

import Image from "next/image";
import PulseForm from "./PulseForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/videos/poster.jpg"
        >
          <source src="/videos/3d-printer.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 video-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.png"
            alt="Chuabacca Custom Creations"
            width={200}
            height={200}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight font-[family-name:var(--font-omnium)]">
          <span className="text-text-primary">Chuabacca</span>{" "}
          <span className="text-accent-primary">Custom Creations</span>
        </h1>
        <p className="text-lg md:text-xl text-primary mb-12 max-w-2xl mx-auto">
          Plan, prototype, print.
          Custom design and production services.
        </p>

        <PulseForm />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-muted"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
