import Image from "next/image";
import { portfolioItems } from "@/lib/site-data";
import { InspirationProcessLink } from "./InspirationProcessLink";

export function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container portfolio-container">
        <header className="inspiration-header">
          <div>
            <p className="eyebrow">Inspirações</p>
            <h2 id="portfolio-title">Cenários para celebrar momentos inesquecíveis.</h2>
          </div>
          <p>
            Cada composição nasce de uma história. Criamos cenários únicos para emocionar você e
            seus convidados.
          </p>
        </header>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <figure className="portfolio-card" key={`${item.src}-${item.label}`}>
              <div className="portfolio-visual">
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 767px) 92vw, (max-width: 1199px) 46vw, 58vw"
                  alt={item.alt}
                />
              </div>
              <figcaption>
                <strong>{item.label}</strong>
                <span>{item.category}</span>
              </figcaption>
            </figure>
          ))}
          <aside className="inspiration-cta" aria-label="Conheça nosso processo">
            <p>
              Transformamos ideias em cenários exclusivos, desenhados para refletir a personalidade
              de cada celebração e criar memórias que permanecem muito além da festa.
            </p>
            <InspirationProcessLink />
          </aside>
        </div>
      </div>
    </section>
  );
}
