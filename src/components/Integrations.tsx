import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

// Our real tech stack — a single sliding row, like the reference site.
const LOGOS = [
  "react",
  "nextjs",
  "typescript",
  "nodejs",
  "python",
  "go",
  "java",
  "flutter",
  "swift",
  "docker",
  "kubernetes",
  "postgresql",
  "mongodb",
  "redis",
  "graphql",
  "tailwindcss",
  "figma",
  "git",
];

// each spreading wave has its own background tint
const RIPPLES = [
  "radial-gradient(closest-side, rgba(128,89,227,1), rgba(79,26,214,0.92) 78%, rgba(79,26,214,0.6))",
  "radial-gradient(closest-side, rgba(99,52,224,0.98), rgba(79,26,214,0.85) 78%, rgba(79,26,214,0.5))",
  "radial-gradient(closest-side, rgba(160,125,255,0.95), rgba(128,89,227,0.78) 78%, rgba(128,89,227,0.4))",
];

function Row() {
  // duplicate the list so the loop is seamless
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track gap-5">
        {items.map((logo, i) => (
          <span
            key={i}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
          >
            <Image
              src={`/assets/tech/${logo}.svg`}
              alt={logo}
              width={32}
              height={32}
              loading="eager"
              className="h-8 w-8 object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export async function Integrations({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative max-w-[1240px] mx-auto px-6">
        <div className="text-center">
          <Badge label={t("integrations.badge")} />
          <h2 className="display mt-7 text-[34px] sm:text-[54px]">
            {t("integrations.title1")}
            <br />
            <span className="text-white/55">{t("integrations.title2")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[15px] text-white/55">
            {t("integrations.desc")}
          </p>
          <div className="mt-8">
            <Link href="#contact" className="btn-violet">
              {t("integrations.button")}
            </Link>
          </div>
        </div>

        <div className="relative mt-20 flex items-center">
          <Row />
          {/* purple circles that appear and spread out like waves — 3 rings, each its own tint */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
            {/* first wave train: rings spread out one after another */}
            {RIPPLES.map((bg, i) => (
              <span
                key={`a-${i}`}
                className="integ-ripple absolute left-1/2 top-1/2 h-24 w-24 rounded-full border-2 border-[#8059e3]/70"
                style={{ background: bg, animationDelay: `${i * 0.25}s` }}
              />
            ))}
            {/* second wave train: starts only after the first finishes (half the 3s cycle) */}
            {RIPPLES.map((bg, i) => (
              <span
                key={`b-${i}`}
                className="integ-ripple absolute left-1/2 top-1/2 h-24 w-24 rounded-full border-2 border-[#8059e3]/70"
                style={{ background: bg, animationDelay: `${1.5 + i * 0.25}s` }}
              />
            ))}
          </div>
          {/* central icon only — no static circle behind it */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/assets/badge.svg"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 drop-shadow-[0_0_20px_rgba(128,89,227,0.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
