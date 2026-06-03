import Link from "next/link";
import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

export async function AboutIntro({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  return (
    <section id="about" className="relative overflow-hidden py-8">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        <Badge label={t("about.badge")} />
        <h2 className="display mx-auto mt-8 max-w-[900px] text-[30px] sm:text-[44px] leading-[1.15]">
          {t("about.text")}
        </h2>
        <div className="mt-9">
          <Link href="#contact" className="btn-violet">
            {t("about.book")}
          </Link>
        </div>
      </div>
    </section>
  );
}
