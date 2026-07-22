"use client";

import type { MouseEvent } from "react";

export function InspirationProcessLink() {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById("contato");

    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", "#contato");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });

    window.setTimeout(() => target.focus({ preventScroll: true }), reduceMotion ? 0 : 450);
  }

  return (
    <a className="inspiration-process-link" href="#contato" onClick={handleClick}>
      Conheça nosso processo <span aria-hidden="true">→</span>
    </a>
  );
}
