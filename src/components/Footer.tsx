import Image from "next/image";
import Link from "next/link";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const SOCIAL = ["Twitter (X)", "Instagram", "Youtube", "Framer"];

export async function Footer({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  const pages = t("footer.pages", { returnObjects: true }) as string[];

  return (
    <footer className="relative border-t border-white/8 py-16">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 md:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
        <div>
          <Link href="#home" className="flex items-center gap-2.5">
            <Image src="/assets/imfsys-logo.svg" alt="imfsys" width={28} height={28} />
            <span className="text-[20px] font-medium">imfsys</span>
          </Link>
          <p className="mt-4 max-w-[260px] text-[14px] text-white/50">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-[14px] font-medium text-white/50">
            {t("footer.templatePages")}
          </h4>
          <ul className="space-y-3">
            {pages.map((p) => (
              <li key={p}>
                <Link href="#home" className="text-[14px] text-white/70 hover:text-white">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[14px] font-medium text-white/50">
            {t("footer.social")}
          </h4>
          <ul className="space-y-3">
            {SOCIAL.map((s) => (
              <li key={s}>
                <a href="#" className="text-[14px] text-white/70 hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-[14px] font-medium text-white/50">
            {t("footer.subscribeForm")}
          </h4>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder={t("footer.emailPlaceholder")}
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-violet"
            />
            <button type="submit" className="btn-violet !px-5 !py-2.5">
              {t("footer.subscribeBtn")}
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1240px] flex-col items-center justify-between gap-4 border-t border-white/8 px-6 pt-8 text-[13px] text-white/45 sm:flex-row">
        <p>{t("footer.copyright")}</p>
        <p>{t("footer.terms")}</p>
      </div>
    </footer>
  );
}
