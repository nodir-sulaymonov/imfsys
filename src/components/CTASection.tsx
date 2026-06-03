import Link from "next/link";
import { Badge } from "./Badge";
import { SunRays } from "./SunRays";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

export async function CTASection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <SunRays />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 text-center">
        <Badge label={t("cta.badge")} />
        <h2 className="display mt-7 text-[34px] sm:text-[54px]">
          {t("cta.title1")}
          <br />
          <span className="text-white/55">{t("cta.title2")}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[15px] text-white/55">
          {t("cta.desc")}
        </p>
        <div className="mt-8">
          <Link href="#contact" className="btn-violet">
            {t("cta.book")}
          </Link>
        </div>
      </div>
    </section>
  );
}
