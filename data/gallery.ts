export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "oni-mask",
    src: "/gallery/oni-mask.jpg",
    title: "Cyberpunk Oni Mask",
    description: "Printed in black PLA+ with 0.12mm layer height for maximum detail. Hand-painted accents.",
  },
  {
    id: "p1s-mod",
    src: "/gallery/p1s-mod.jpg",
    title: "Bambu P1S Side Riser",
    description: "Functional print in PETG to allow for better ventilation during high-temp prints.",
  },
  {
    id: "dragon-lamp",
    src: "/gallery/dragon-lamp.jpg",
    title: "Articulated Dragon Lamp",
    description: "Multi-part print with integrated LED lighting. Fully poseable joints.",
  },
  {
    id: "cosplay-armor",
    src: "/gallery/cosplay-armor.jpg",
    title: "Sci-Fi Shoulder Armor",
    description: "Lightweight cosplay piece printed in PETG. Weathered paint finish for realistic effect.",
  },
  {
    id: "desk-organizer",
    src: "/gallery/desk-organizer.jpg",
    title: "Modular Desk Organizer",
    description: "Customizable storage system with snap-fit connections. Matte black PLA.",
  },
  {
    id: "phone-stand",
    src: "/gallery/phone-stand.jpg",
    title: "Geometric Phone Stand",
    description: "Low-poly design with cable management. Available in multiple colors.",
  },
];
