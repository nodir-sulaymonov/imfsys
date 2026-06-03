import Image from "next/image";
import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

type Stat = { value: string; label: string };

const HL =
  "absolute inset-x-0 h-px bg-[linear-gradient(90deg,rgba(79,26,214,0),#4F1AD6_50%,rgba(79,26,214,0))]";

export async function PortfolioSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  const cardTags = t("portfolio.cardTags", { returnObjects: true }) as string[];
  const stats = t("portfolio.stats", { returnObjects: true }) as Stat[];
  const tech = t("portfolio.tech", { returnObjects: true }) as string[];

  return (
    <section id="portfolio" className="relative pb-8">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-4 sm:px-6">
        {/* header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge label={t("portfolio.badge")} />
          <h2 className="mx-auto mt-3 max-w-[640px] bg-[linear-gradient(90deg,#fff,rgba(255,255,255,0.3))] bg-clip-text text-[34px] font-normal leading-[1.3] tracking-[-1.9px] text-transparent sm:text-[52px]">
            {t("portfolio.title")}
          </h2>
          <p className="mx-auto max-w-[630px] text-[16px] leading-[26px] tracking-[-0.2px] text-white/60">
            {t("portfolio.desc")}
          </p>
        </div>

        {/* cards */}
        <div className="grid w-full gap-3 lg:grid-cols-2">
          {/* left — text card */}
          <article className="relative isolate overflow-hidden rounded-[12px] border border-[#121212] bg-[#080808] p-6">
            <span className={`${HL} top-0`} />
            <span className={`${HL} bottom-0`} />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2.5">
                {/* meta tags */}
                <div className="flex flex-wrap gap-2.5">
                  {cardTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-[#373A41] bg-[#13161B] px-2.5 py-1 text-[14px] font-medium text-[#CECFD2]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-[26px] font-medium leading-[120%] tracking-[-0.5px] text-white md:text-[32px]">
                  {t("portfolio.cardTitle")}
                </h3>

                <p className="text-[16px] leading-[26px] tracking-[-0.2px] text-white/60">
                  {t("portfolio.cardDesc")}
                </p>
              </div>

              {/* stats */}
              <div className="flex w-fit overflow-hidden rounded-lg">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex flex-col items-center justify-center gap-4 px-6 py-4 ${
                      i === 1
                        ? "bg-gradient-to-b from-[#4f1ad6] to-[#8059e3]"
                        : "bg-[#13161B]"
                    }`}
                  >
                    <span
                      className={`text-[24px] font-medium leading-none ${
                        i === 1 ? "text-white" : "text-[#CECFD2]"
                      }`}
                    >
                      {s.value}
                    </span>
                    <span
                      className={`text-[14px] font-medium leading-none ${
                        i === 1 ? "text-white" : "text-[#CECFD2]"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* tech tags */}
              <div className="flex flex-wrap gap-2.5">
                {tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-[#373A41] bg-[#13161B] px-2.5 py-1 text-[14px] font-medium text-[#CECFD2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* right — image card */}
          <article className="relative isolate min-h-[360px] overflow-hidden rounded-[12px] border border-[#121212] bg-[#080808] lg:min-h-[484px]">
            <span className={`${HL} top-0 z-10`} />
            <span className={`${HL} bottom-0 z-10`} />
            {/* purple rays backdrop */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(99,52,224,0.55),rgba(79,26,214,0.12)_45%,transparent_72%)]" />
            <Image
              src="/assets/portfolio1.png"
              alt={t("portfolio.cardTitle")}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
