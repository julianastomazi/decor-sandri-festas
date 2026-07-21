"use client";

import { useState } from "react";
import { faqs } from "@/lib/site-data";
import { WhatsAppButton } from "./WhatsAppButton";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <div className="faq-intro">
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 id="faq-title">
            Antes de celebrar, <em>vale saber.</em>
          </h2>
          <p>Ainda ficou com alguma dúvida? Fale diretamente com a Sandri.</p>
          <WhatsAppButton label="Tirar uma dúvida" />
        </div>
        <div className="accordion">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            return (
              <article key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {faq.question}
                    <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div id={contentId} className="accordion-content" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
