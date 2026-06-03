"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { languages, type Locale } from "@/i18n/settings";

const labels: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbekcha",
};

const short: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const getLocalePath = (target: Locale) => {
    const segments = pathname.split("/");
    segments[1] = target;
    return segments.join("/");
  };

  const flag = (lng: Locale) => (
    <Image
      src={`/assets/flags/${lng}.svg`}
      alt={short[lng]}
      width={22}
      height={15}
      className="h-[15px] w-[22px] rounded-[3px] object-cover ring-1 ring-white/10"
    />
  );

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-2 rounded-full bg-white/5 py-1.5 pl-2 pr-3 text-xs font-medium text-white transition-colors hover:bg-white/10"
      >
        {flag(locale)}
        <span>{short[locale]}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-white/60 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#0c0c0e] p-1 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
          {languages.map((lng) => (
            <button
              key={lng}
              type="button"
              onClick={() => {
                setOpen(false);
                router.push(getLocalePath(lng));
              }}
              className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                locale === lng
                  ? "bg-white/10 text-white"
                  : "text-white/70 hover:bg-white/5 hover:text-white"
              }`}
            >
              {flag(lng)}
              <span>{labels[lng]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
