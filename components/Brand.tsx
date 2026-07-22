import Image from "next/image";

interface BrandProps {
  compact?: boolean;
}

export function Brand({ compact = false }: BrandProps) {
  return (
    <a className="brand" href="#inicio" aria-label="Decor Sandri — voltar ao início">
      <Image
        src="/images/logo-decor-sandri-navbar-v3.webp"
        width={compact ? 144 : 164}
        height={compact ? 110 : 125}
        alt="Decor Sandri by Inventando Festa"
        priority={!compact}
      />
    </a>
  );
}
