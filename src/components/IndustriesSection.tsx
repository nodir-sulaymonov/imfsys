import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

type Industry = { title: string; desc: string };

export async function IndustriesSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  const items = t("industries.items", { returnObjects: true }) as Industry[];

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge label={t("industries.badge")} />
          <h2 className="mx-auto mt-3 max-w-[640px] bg-[linear-gradient(90deg,#fff,rgba(255,255,255,0.35))] bg-clip-text text-[34px] font-normal leading-[1.25] tracking-[-1.5px] text-transparent sm:text-[52px]">
            {t("industries.title")}
          </h2>
          <p className="mx-auto max-w-[640px] text-[16px] leading-[26px] tracking-[-0.2px] text-white/60">
            {t("industries.desc")}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[14px] border border-white/[0.07] bg-[#080808] p-6"
            >
              <h3 className="text-[20px] font-medium tracking-[-0.4px] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[25px] tracking-[-0.2px] text-white/60">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
