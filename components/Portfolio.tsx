import Image from "next/image";
import { portfolioItems } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionHeading
          eyebrow="Portfólio"
          title={
            <>
              A festa dos seus sonhos <em id="portfolio-title">começa no olhar.</em>
            </>
          }
          description="Cada composição nasce de uma história. Criamos cenários únicos, pensados para emocionar você e seus convidados."
        />
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <figure
              className={`portfolio-card portfolio-card--${item.layout}`}
              key={`${item.src}-${item.label}`}
            >
              <Image
                src={item.src}
                fill
                sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={item.alt}
                style={{ objectPosition: item.position }}
              />
              <figcaption>
                {item.label}
                <span aria-hidden="true">↗</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
