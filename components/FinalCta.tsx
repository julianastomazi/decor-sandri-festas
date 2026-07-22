import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCta() {
  return (
    <section className="final-cta" id="contato" tabIndex={-1} aria-labelledby="contact-title">
      <div className="container final-cta-content">
        <p className="eyebrow">Sua festa começa aqui</p>
        <h2 id="contact-title">
          Vamos transformar sua ideia <em>em um momento inesquecível?</em>
        </h2>
        <p>Conte para a gente o que você imagina. Será um prazer criar esse cenário com você.</p>
        <WhatsAppButton label="Pedir orçamento pelo WhatsApp" />
      </div>
    </section>
  );
}
