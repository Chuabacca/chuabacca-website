"use client";

import { useState } from "react";
import { galleryItems, GalleryItem } from "@/data/gallery";
import GalleryTile from "./GalleryTile";
import Lightbox from "./Lightbox";

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleTileClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const handleCloseLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-background-primary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Project Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <GalleryTile
              key={item.id}
              item={item}
              onClick={() => handleTileClick(item)}
            />
          ))}
        </div>
      </div>

      {selectedItem && (
        <Lightbox item={selectedItem} onClose={handleCloseLightbox} />
      )}
    </section>
  );
}
