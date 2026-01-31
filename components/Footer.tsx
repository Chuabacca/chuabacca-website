import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-muted/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Business Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-omnium text-text-primary mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Chuabacca Logo"
                width={32}
                height={32}
                className="inline-block"
              />
              Chuabacca Custom Creations
            </h3>
            <p className="text-subtle">We are in Santa Clarita, CA</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            Email us at:{" "}
            <a
              href="mailto:hello@chuabacca.com"
              className="text-muted hover:text-subtle transition-colors"
            >
              hello@chuabacca.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-muted/30 text-center">
          <p className="text-muted text-sm">
            &copy; 2026 Chuabacca Custom Creations
          </p>
        </div>
      </div>
    </footer>
  );
}
