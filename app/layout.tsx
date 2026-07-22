import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});
const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://julianastomazi.github.io/decor-sandri-festas/"),
  title: "Decor Sandri | Decorações que transformam festas em memórias",
  description:
    "Decoração personalizada para festas infantis e adultas em São Leopoldo e região. Peça seu orçamento pelo WhatsApp.",
  alternates: { canonical: "https://julianastomazi.github.io/decor-sandri-festas/" },
  icons: {
    icon: "https://julianastomazi.github.io/decor-sandri-festas/images/logo-decor-sandri.webp",
  },
  openGraph: {
    title: "Decor Sandri by Inventando Festa",
    description: "Decorações autorais para celebrar do seu jeito.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "https://julianastomazi.github.io/decor-sandri-festas/images/hero-decor-sandri.webp",
        width: 1200,
        height: 630,
        alt: "Decoração Decor Sandri",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Decor Sandri by Inventando Festa",
  description: "Decoração personalizada para festas infantis e adultas.",
  areaServed: ["São Leopoldo", "Vale do Sinos"],
  telephone: "+5551998429491",
  sameAs: ["https://www.instagram.com/inventandofesta_decoracoes/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
