"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 lightbox-backdrop flex items-center justify-center p-4 md:p-8"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-8 md:right-8 text-text-primary hover:text-accent-primary transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="bg-background-secondary rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row neon-glow-intense">
        {/* Image */}
        <div className="relative w-full md:w-2/3 aspect-square md:aspect-auto">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
            priority
          />
        </div>

        {/* Details */}
        <div className="p-6 md:w-1/3 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {item.title}
          </h2>
          <p className="text-subtle leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
