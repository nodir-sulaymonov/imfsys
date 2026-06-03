import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const LOGOS = [
  "img_046.svg",
  "img_047.svg",
  "img_048.svg",
  "img_049.svg",
  "img_050.svg",
  "img_051.svg",
  "img_052.svg",
  "img_063.png",
  "img_064.png",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...LOGOS, ...LOGOS];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div
        className="marquee-track gap-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {items.map((logo, i) => (
          <span
            key={i}
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
          >
            <Image
              src={`/assets/${logo}`}
              alt=""
              width={32}
              height={32}
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
    <section className="relative overflow-hidden py-28">
      <div className="relative max-w-[1200px] mx-auto px-6">
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

        <div className="relative mt-16 space-y-4">
          <Row />
          <Row reverse />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] shadow-[0_0_60px_rgba(128,89,227,0.8)]">
              <Image src="/assets/badge.svg" alt="" width={44} height={44} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
