import { processSteps } from "@/lib/site-data";
import { RotatingReviews } from "./RotatingReviews";
import { SectionHeading } from "./SectionHeading";

export function ProcessTrust() {
  return (
    <>
      <section className="section process" aria-labelledby="process-title">
        <div className="container">
          <SectionHeading
            centered
            eyebrow="Como funciona"
            title={
              <>
                Três passos para uma festa <em id="process-title">leve e inesquecível.</em>
              </>
            }
          />
          <div className="steps">
            {processSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="trust" aria-label="Avaliações de clientes">
        <div className="trust-stat">
          <strong>5,0</strong>
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <p>avaliação no Google</p>
        </div>
        <div className="trust-stat">
          <strong>+50</strong>
          <span>avaliações</span>
          <p>de clientes encantados</p>
        </div>
        <RotatingReviews />
      </section>
    </>
  );
}
