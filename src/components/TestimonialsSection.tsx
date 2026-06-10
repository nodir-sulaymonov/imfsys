import Link from "next/link";
import { Badge } from "./Badge";
import { SunRays } from "./SunRays";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

type Item = { title: string; desc: string };

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
          {items.map((item, i) => {
            return (
              <article key={item.title} className="card flex flex-col p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] text-[16px] font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[20px] font-medium tracking-[-0.4px] text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
