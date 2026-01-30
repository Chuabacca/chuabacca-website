# Project: Chuabacca Custom Creations - 3D Printing Gallery

## Tech Stack
- **Framework:** Next.js (App Router)
- **Deployment:** Vercel
- **Email Service:** Resend (via Server Actions)
- **Styling:** Tailwind CSS

## Color Theme
- #131F2F
- #102E4D
- #3F4F7E
- #695C7B
- #E66F5C
- #FE9B62

## 1. Hero Section & "Pulse" Form
- **Background:** Muted, looping video of a 3D printer in a cyberpunk workshop. 
- **Atmosphere:** Dark cyberpunk theme
- **The Form:** - Starts as a single email input field.
  - **Expansion Logic:** On focus, use a smooth transition to expand the container, revealing a "Project Details" textarea and a "Send Request" button.
  - **Submission:** Use a Next.js Server Action to send form data to hello@chuabacca.com using the Resend API.

## 2. Gallery & Lightbox
- **Logic:** The gallery is driven by a central data array (see example below).
- **Tiles:** Responsive grid. Each tile should have a subtle neon glow that intensifies on hover.
- **Lightbox:** When a tile is clicked, open a centered modal showing the image, title, and description.

### Gallery Data Example (data/gallery.ts)
```typescript
export const galleryItems = [
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
  }
];
```
## 3. Footer
- Business Name: Chuabacca Custom Creations
- Location: Santa Clarita, CA
- Contact: hello@chuabacca.com
- Details: Minimalist layout. "© 2026 Chuabacca Custom Creations. Accepting new projects."
