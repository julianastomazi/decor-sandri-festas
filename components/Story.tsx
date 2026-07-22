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
          A Decor Sandri nasceu da mesma criatividade que deu vida à Inventando Festa. Cada projeto
          começa com uma conversa, ganha personalidade em cada detalhe e é acompanhado de perto para
          que sua celebração seja única, leve e inesquecível.
        </p>
        <p>
          Por trás de cada cenário está Ana Paula Sandri, transformando ideias em experiências que
          contam histórias e permanecem na memória de quem vive cada momento.
        </p>
        <blockquote>“Organização sem estresse, beleza em cada detalhe.”</blockquote>
        <p className="story-closing">
          Algumas pessoas inventam moda.
          <br />
          <strong>
            A Ana escolheu inventar festas. <span aria-hidden="true">🎈</span>
          </strong>
        </p>
        <WhatsAppButton label="Conte sua ideia para nós" />
      </div>
      <figure className="story-image">
        <Image
          src="/images/ana-sandri.webp"
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
