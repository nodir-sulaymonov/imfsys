"use client";

import { useState } from "react";
import { Badge } from "./Badge";
import { useTranslation } from "@/i18n/client";
import { type Locale } from "@/i18n/settings";

type QA = { q: string; a: string };

export function FAQ({ locale }: { locale: Locale }) {
  const { t } = useTranslation(locale, "common");
  const items = t("faq.items", { returnObjects: true }) as QA[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-3 lg:grid-cols-[1fr_600px] lg:items-start lg:gap-16">
        {/* left — heading column */}
        <div className="lg:pt-8">
          <Badge label={t("faq.badge")} />
          <h2 className="mt-7 text-[44px] font-normal leading-[1.05] tracking-[-1.9px] sm:text-[54px]">
            <span className="block text-white">{t("faq.title1")}</span>
            <span className="block text-white/60">{t("faq.title2")}</span>
          </h2>
          <p className="mt-6 max-w-[400px] text-[16px] leading-[26px] tracking-[-0.2px] text-white/60">
            {t("faq.desc")}
          </p>
        </div>

        {/* right — accordion */}
        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-[30px] py-[30px] text-left"
                >
                  <span className="text-[18px] font-normal tracking-[-0.5px] text-white">
                    {item.q}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className={`shrink-0 text-white transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-[30px] pb-[30px] text-[15px] leading-relaxed text-white/55">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
