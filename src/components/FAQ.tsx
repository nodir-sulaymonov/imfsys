"use client";

import { useState } from "react";
import { Badge } from "./Badge";
import { useTranslation } from "@/i18n/client";
import { type Locale } from "@/i18n/settings";

type QA = { q: string; a: string };

export function FAQ({ locale }: { locale: Locale }) {
  const { t } = useTranslation(locale, "common");
  const items = t("faq.items", { returnObjects: true }) as QA[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-[820px] px-6">
        <div className="text-center">
          <Badge label={t("faq.badge")} />
          <h2 className="display mt-7 text-[34px] sm:text-[54px]">
            {t("faq.title1")} <span className="text-white/55">{t("faq.title2")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] text-white/55">
            {t("faq.desc")}
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[16px] font-medium text-white">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14px] leading-relaxed text-white/55">
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
