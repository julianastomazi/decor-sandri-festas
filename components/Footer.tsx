import { Brand } from "./Brand";
import { InstagramIcon, WhatsAppIcon } from "./Icons";
import { site, whatsappUrl } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <Brand compact />
        <div>
          <p>Festas infantis e adultas</p>
          <p>{site.region}</p>
        </div>
        <div className="social-links">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon /> Instagram
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
        <small>© 2026 Decor Sandri by Inventando Festa. Feito para celebrar.</small>
      </div>
    </footer>
  );
}
