import Image from "next/image";
import Link from "next/link";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

// 8 technology logos shown in a right-to-left carousel (≈3 visible at a time)
const LOGOS = [
  "react",
  "nodejs",
  "typescript",
  "python",
  "docker",
  "kubernetes",
  "mongodb",
  "flutter",
];

export async function Hero({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-[340px] text-center">
      {/* smaller glowing ring */}
      <div className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 w-[2000px] max-w-none">
        <Image
          src="/assets/hero-ring.png"
          alt=""
          width={1460}
          height={583}
          priority
          className="w-[70%] m-auto h-[400px] object-fill"
          style={{
            maskImage:
              "linear-gradient(to bottom, #000 0%, #000 50%, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, #000 50%, transparent 92%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <span className="eyebrow mb-8">
          <span className="rounded-full bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] px-2.5 py-0.5 text-[12px] font-medium text-white">
            2025
          </span>
          {t("hero.badge")}
        </span>

        <h1 className="display text-[44px] sm:text-[64px] lg:text-[86px]">
          {t("hero.title1")}
          <br />
          {t("hero.title2")}
        </h1>

        <p className="mx-auto mt-7 max-w-[520px] text-[16px] leading-relaxed text-white/55">
          {t("hero.desc")}
        </p>

        <div className="mt-9 flex items-center justify-center gap-3">
          <Link href="#contact" className="btn-light">
            {t("hero.connect")}
          </Link>
          <Link href="#about" className="btn-dark">
            What is imfsys?
          </Link>
        </div>
      </div>

      {/* tech-logo carousel */}
      <div className="absolute bottom-[120px] left-1/2 z-10 w-[300px] -translate-x-1/2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_22%,#000_78%,transparent)]">
        <div className="marquee-track items-center gap-12">
          {[...LOGOS, ...LOGOS].map((name, i) => (
            <Image
              key={i}
              src={`/assets/tech/${name}.svg`}
              alt={name}
              width={40}
              height={40}
              className="h-9 w-auto shrink-0 object-contain opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
