import { WhatsAppIcon } from "./Icons";
import { whatsappUrl } from "@/lib/site-data";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  label = "Quero meu orçamento",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      className={`button ${className}`.trim()}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </a>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Sandri pelo WhatsApp"
    >
      <WhatsAppIcon />
      <span>Fale com a Sandri</span>
    </a>
  );
}
