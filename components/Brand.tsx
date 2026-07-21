import Image from "next/image";
import { site } from "@/lib/site-data";

interface BrandProps {
  compact?: boolean;
}

export function Brand({ compact = false }: BrandProps) {
  const size = compact ? 54 : 62;

  return (
    <a className="brand" href="#inicio" aria-label="Decor Sandri — voltar ao início">
      <Image src="/images/logo.jpg" width={size} height={size} alt="" priority={!compact} />
      <span>
        <strong>{site.name}</strong>
        <small>{site.signature}</small>
      </span>
    </a>
  );
}
