import Image from "next/image";

export function Badge({ label }: { label: string }) {
  return (
    <span className="eyebrow">
      <Image src="/assets/badge.svg" alt="" width={20} height={20} />
      {label}
    </span>
  );
}
