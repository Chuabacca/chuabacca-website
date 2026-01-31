"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ item, onClose, onNext, onPrev }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    },
    [onClose, onNext, onPrev]
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
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Previous button */}
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-8 z-10 text-text-primary hover:text-accent-primary transition-colors bg-background-secondary/80 hover:bg-background-secondary rounded-full p-3 md:p-4"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={onNext}
          className="absolute right-4 md:right-8 z-10 text-text-primary hover:text-accent-primary transition-colors bg-background-secondary/80 hover:bg-background-secondary rounded-full p-3 md:p-4"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Image - takes up most of the screen */}
        <div className="relative w-full h-full max-w-[95vw] max-h-[95vh]">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-contain"
            sizes="95vw"
            priority
          />
        </div>

        {/* Details - overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background-primary/95 via-background-primary/85 to-transparent p-6 md:p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2">
              {item.title}
            </h2>
            <p className="text-subtle text-base md:text-lg leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
