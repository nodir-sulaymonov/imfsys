"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "./Badge";
import { useTranslation } from "@/i18n/client";
import { type Locale } from "@/i18n/settings";

// span: 1 = narrow card, 2 = wide card (within a 3-column row)
type Project = { img: string; title: string; span: 1 | 2 };

type Tab = {
  key: string;
  label: string;
  role: string;
  dir: string;
  projects: Project[];
};

const PERSON = "Azimov Samandar";

const TABS: Tab[] = [
  {
    key: "backend",
    label: "Back End Projects",
    role: "Backend Developer",
    dir: "back",
    projects: [
      { img: "qizlar", title: "Qizlar akademiyasi", span: 1 },
      { img: "uzches", title: "Uzchess", span: 2 },
      { img: "fonus-kids", title: "Fonus Kids", span: 2 },
      { img: "nexus", title: "Nexus", span: 1 },
    ],
  },
  {
    key: "fullstack",
    label: "Full Stack Projects",
    role: "Fullstack Developer",
    dir: "fullstack",
    projects: [
      { img: "smart_ecosystem", title: "Smart Ecosystem", span: 1 },
      { img: "sberbank", title: "SberBank", span: 2 },
      { img: "sovereig", title: "Sovereign Wallet", span: 2 },
      { img: "concordium", title: "Concordium", span: 1 },
    ],
  },
  {
    key: "frontend",
    label: "Front End Projects",
    role: "Fullstack Developer",
    dir: "front",
    projects: [
      { img: "mubert", title: "Mubert", span: 1 },
      { img: "modusbi", title: "Modus BI", span: 1 },
      { img: "tiit", title: "ti-it.tennis", span: 1 },
    ],
  },
  {
    key: "mobile",
    label: "Mobile Projects",
    role: "Fullstack Developer",
    dir: "mobile",
    projects: [
      { img: "qarz-daftar", title: "Qarz Daftar", span: 1 },
      { img: "mantiqiy", title: "Mantiqiy Savollar", span: 2 },
      { img: "tuy-qachon", title: "To'y Qachon", span: 2 },
      { img: "salyam", title: "Salyam", span: 1 },
    ],
  },
];

const META =
  "rounded-lg border border-[#373A41] bg-[#13161B]/70 px-2.5 py-1 text-[13px] font-medium text-[#CECFD2] backdrop-blur-sm";

export function TeamSection({ locale }: { locale: Locale }) {
  const { t } = useTranslation(locale, "common");
  const [active, setActive] = useState(TABS[0].key);
  const tab = TABS.find((x) => x.key === active) ?? TABS[0];

  return (
    <section id="team" className="relative py-16">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-4 sm:px-6">
        {/* header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge label={t("team.badge")} />
          <h2 className="mx-auto mt-3 max-w-[680px] bg-[linear-gradient(90deg,#fff,rgba(255,255,255,0.3))] bg-clip-text text-[34px] font-normal leading-[1.3] tracking-[-1.9px] text-transparent sm:text-[52px]">
            {t("team.title")}
          </h2>
          <p className="mx-auto max-w-[630px] text-[16px] leading-[26px] tracking-[-0.2px] text-white/60">
            {t("team.desc")}
          </p>
        </div>

        {/* tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5">
          {TABS.map((x) => {
            const isActive = x.key === active;
            return (
              <button
                key={x.key}
                type="button"
                onClick={() => setActive(x.key)}
                className={`cursor-pointer rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                  isActive
                    ? "bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] text-white shadow-[0_6px_18px_rgba(79,26,214,0.45)]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {x.label}
              </button>
            );
          })}
        </div>

        {/* project cards — narrow (1) + wide (2) alternating, like the Figma rows.
            Frontend uses tall, elongated cards (400×740) in 3 equal columns. */}
        <div
          className={`grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
            tab.key === "frontend" ? "lg:auto-rows-[740px]" : "lg:auto-rows-[360px]"
          }`}
        >
          {tab.projects.map((p, i) => (
            <article
              key={`${tab.key}-${p.img}`}
              style={{ animationDelay: `${i * 90}ms` }}
              className={`team-fade group relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#0c0c0e] lg:aspect-auto lg:h-full ${
                tab.key === "frontend" ? "aspect-[3/5]" : "aspect-[16/11]"
              } ${p.span === 2 ? "lg:col-span-2" : "lg:col-span-1"}`}
            >
              <Image
                src={`/assets/team/${tab.dir}/${p.img}.webp`}
                alt={p.title}
                fill
                sizes={
                  p.span === 2
                    ? "(min-width:1024px) 66vw, 100vw"
                    : "(min-width:1024px) 33vw, 100vw"
                }
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* bottom gradient so the text is readable */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
                <h3 className="text-[20px] font-medium tracking-[-0.4px] text-white">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  <span className={META}>{PERSON}</span>
                  <span className={META}>{tab.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
