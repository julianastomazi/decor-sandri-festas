import Image from "next/image";
import { WhatsAppButton } from "./WhatsAppButton";

export function Story() {
  return (
    <section className="story" id="sobre" aria-labelledby="story-title">
      <div className="story-content">
        <p className="eyebrow">Feito com afeto</p>
        <h2 id="story-title">
          Mais do que decorar, <em>criamos memórias.</em>
        </h2>
        <p>
          À frente da Decor Sandri, cada projeto é acompanhado de perto — da primeira ideia ao
          último detalhe. Acreditamos que uma festa bonita também precisa ter alma, leveza e a
          identidade de quem celebra.
        </p>
        <blockquote>“Organização sem estresse, beleza em cada detalhe.”</blockquote>
        <WhatsAppButton label="Conte sua ideia para nós" />
      </div>
      <figure className="story-image">
        <Image
          src="/images/logo.jpg"
          fill
          sizes="(max-width: 800px) 100vw, 45vw"
          alt="Sandri, decoradora e fundadora"
        />
        <figcaption>
          Sandri <small>decoradora e fundadora</small>
        </figcaption>
      </figure>
    </section>
  );
}
