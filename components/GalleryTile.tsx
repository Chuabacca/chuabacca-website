"use client";

import Image from "next/image";
import { GalleryItem } from "@/data/gallery";

interface GalleryTileProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryTile({ item, onClick }: GalleryTileProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-lg bg-background-secondary border border-muted/30 neon-glow neon-glow-hover cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-primary/90 via-background-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div className="text-left">
          <h3 className="text-lg font-semibold text-text-primary mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-subtle line-clamp-2">{item.description}</p>
        </div>
      </div>
    </button>
  );
}
