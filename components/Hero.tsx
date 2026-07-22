import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { WhatsAppButton } from "./WhatsAppButton";

export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <Image
        className="hero-background"
        src={assetPath("/images/hero-decor-sandri.webp")}
        fill
        priority
        sizes="100vw"
        alt=""
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Decorações autorais em São Leopoldo e região</p>
        <h1 id="hero-title">
          Seu momento merece <em>um cenário inesquecível.</em>
        </h1>
        <p className="hero-description">
          Projetamos festas infantis e adultas com personalidade, cuidado e beleza em cada detalhe —
          para você viver a celebração sem estresse.
        </p>
        <div className="hero-actions">
          <WhatsAppButton />
          <a href="#portfolio" className="text-link">
            Conheça nosso trabalho <span aria-hidden="true">→</span>
          </a>
        </div>
        <div
          className="hero-proof"
          aria-label="Avaliação 5 de 5 no Google, baseada em mais de 50 avaliações"
        >
          <span className="google-mark" aria-hidden="true">
            G
          </span>
          <strong>5,0 no Google</strong>
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span className="review-count">+50 avaliações</span>
        </div>
      </div>
      <a className="scroll-hint" href="#portfolio">
        Role para descobrir <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
