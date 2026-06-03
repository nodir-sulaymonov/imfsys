"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages, type Locale } from "@/i18n/settings";

const labels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  const getLocalePath = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-full p-1">
      {languages.map((lng) => (
        <Link
          key={lng}
          href={getLocalePath(lng)}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
            locale === lng
              ? "bg-white/10 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {labels[lng]}
        </Link>
      ))}
    </div>
  );
}
