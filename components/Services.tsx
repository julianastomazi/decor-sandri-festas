import { services } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  return (
    <section className="section services" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          light
          eyebrow="O que criamos"
          title={
            <>
              Da ideia à celebração, <em id="services-title">cuidamos de tudo.</em>
            </>
          }
          description="Projetos pensados para transformar espaços e deixar você livre para aproveitar o que realmente importa."
        />
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
