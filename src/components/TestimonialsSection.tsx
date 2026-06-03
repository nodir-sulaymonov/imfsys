import Link from "next/link";
import { Badge } from "./Badge";
import { SunRays } from "./SunRays";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

// names are static; role/quote come from translations
const NAMES = [
  "John Smith",
  "Emily Davis",
  "David Lee",
  "Mark Thompson",
  "Brian Clark",
  "Daniel Carter",
];

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type Item = { role: string; quote: string };

export async function TestimonialsSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  const items = t("testimonials.items", { returnObjects: true }) as Item[];

  return (
    <section className="relative overflow-hidden py-16">
      <SunRays />
      <div className="relative z-10 mx-auto max-w-[1240px] px-6">
        <div className="text-center">
          <Badge label={t("testimonials.badge")} />
          <h2 className="display mt-7 text-[34px] sm:text-[54px]">
            {t("testimonials.title1")}
            <br />
            <span className="text-white/55">{t("testimonials.title2")}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-[15px] text-white/55">
            {t("testimonials.desc")}
          </p>
          <div className="mt-8">
            <Link href="#contact" className="btn-violet">
              {t("testimonials.book")}
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {NAMES.map((name, i) => {
            const item = items[i];
            return (
              <article key={name} className="card flex flex-col p-7">
                <div className="text-[15px] text-yellow-400">★★★★★</div>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-white/70">
                  &ldquo;{item?.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] text-[14px] font-semibold text-white">
                    {initials(name)}
                  </span>
                  <div>
                    <p className="text-[14px] font-medium">{name}</p>
                    <p className="text-[12px] text-white/50">{item?.role}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
