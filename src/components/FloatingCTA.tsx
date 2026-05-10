import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  return (
    <a
      href="https://wa.me/13055550142"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-4 pr-5 py-3 shadow-luxe hover:bg-gold hover:text-ink transition-luxe"
    >
      <MessageCircle size={18} />
      <span className="text-sm tracking-wide hidden sm:inline">Quick Quote</span>
    </a>
  );
}
