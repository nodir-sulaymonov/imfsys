import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "portfolio", href: "#portfolio" },
  { key: "contact", href: "#contact" },
  { key: "faq", href: "#faq" },
];

export async function Navbar({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-md">
      <nav className="max-w-[1240px] mx-auto h-[72px] px-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5">
          <Image src="/assets/imfsys-logo.svg" alt="imfsys" width={28} height={28} />
          <span className="text-[20px] font-medium tracking-tight">imfsys</span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 text-[15px]">
          {LINKS.map((l, i) => (
            <li key={l.key}>
              <Link
                href={l.href}
                className={
                  i === 0
                    ? "text-white"
                    : "text-white/55 hover:text-white transition-colors"
                }
              >
                {t(`nav.${l.key}`)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Link href="#contact" className="btn-violet !py-2.5 !px-5">
            {t("nav.getInTouch")}
          </Link>
        </div>
      </nav>
    </header>
  );
}
