import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${light ? " section-heading--light" : ""}${centered ? " section-heading--centered" : ""}`}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
