"use client";

import { useEffect, useState } from "react";

const reviews = [
  "A Paula foi excepcional do inicio ao fim. Super entendeu a minha ideia de cores e foi atrás de tecido pra ficar exatamente como eu queria! Fácil comunicação, montagem e desmontagem ágil e qualidade impecável! Segunda festa que faço com ela! Recomendo demais!",
  "Amei a decoração para o Chá de Fraldas da minha filha. Tudo personalizado e do jeitinho que eu queria, fomos construindo juntas, testando e explorando diferentes opções, e o resultado ficou maravilhoso! Agradeço a Paula e equipe pelo carinho nessa entrega e por ter tornado esse dia ainda mais especial.",
  "Ana Paula foi muito atenciosa e entregou aquilo que pedi para o Chá do meu pequeno. Todos os detalhes das cores e até mais do que havia pedido. Muito obrigada 💙",
  "Inventamos uma festa dupla, batizado e aniversário, saiu tudo lindo conforme planejamos. Obrigada Inventando Festa pelo trabalho impecável.",
  "Inventando Festa realizou o sonho de uma Branca de Neve que comemorou seus 5 aninhos em um lugar mega especial e cheio de memórias, gratidão ao atendimento impecável da Ana, amamos tudo♥️",
] as const;

export function RotatingReviews() {
  const [activeReview, setActiveReview] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;

    const interval = window.setInterval(
      () => setActiveReview((current) => (current + 1) % reviews.length),
      9000,
    );

    return () => window.clearInterval(interval);
  }, [paused, reduceMotion]);

  return (
    <blockquote
      className="trust-review"
      tabIndex={0}
      aria-live="polite"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
    >
      <span className="trust-review-text" key={activeReview}>
        “{reviews[activeReview]}”
      </span>
      <cite>
        Cliente Decor Sandri
        <small>Avaliação publicada no Google</small>
      </cite>
    </blockquote>
  );
}
