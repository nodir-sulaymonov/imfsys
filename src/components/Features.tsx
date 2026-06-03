import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { TechCircle } from "./TechCircle";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

/* ------------------------------ card figures ------------------------------ */

function RocketFigure() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" fill="none">
      <g stroke="rgba(255,255,255,0.45)" strokeWidth="1.5">
        <path d="M120 36c20 14 30 38 30 66 0 18-5 33-12 44h-36c-7-11-12-26-12-44 0-28 10-52 30-66Z" />
        <path d="M90 132l-16 14v22l22-12M150 132l16 14v22l-22-12" />
        <path d="M104 178h32l-6 22h-20l-6-22Z" />
      </g>
      <rect
        x="104"
        y="92"
        width="32"
        height="22"
        rx="6"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
      />
      <text
        x="120"
        y="107"
        textAnchor="middle"
        fontSize="11"
        fill="rgba(255,255,255,0.7)"
        fontFamily="monospace"
      >
        01001
      </text>
      <g fill="rgba(255,255,255,0.10)">
        <circle cx="120" cy="214" r="18" />
        <circle cx="92" cy="222" r="11" />
        <circle cx="150" cy="220" r="9" />
        <circle cx="132" cy="232" r="6" />
      </g>
    </svg>
  );
}

function CodeFigure() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" fill="none">
      <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.5">
        <path d="M40 120h44M156 120h44" />
        <circle cx="40" cy="120" r="5" fill="rgba(255,255,255,0.12)" />
        <circle cx="200" cy="120" r="5" fill="rgba(255,255,255,0.12)" />
        <circle cx="84" cy="120" r="4" fill="rgba(255,255,255,0.2)" />
        <circle cx="156" cy="120" r="4" fill="rgba(255,255,255,0.2)" />
      </g>
      <path
        d="M120 78l28 10v24c0 20-13 30-28 38-15-8-28-18-28-38V88l28-10Z"
        fill="rgba(79,26,214,0.18)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
      />
      <g fill="rgba(255,255,255,0.75)">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={i} cx={102 + i * 7.2} cy={118} r="2.4" />
        ))}
      </g>
    </svg>
  );
}

function AudioFigure() {
  const bars = [30, 52, 40, 70, 48, 84, 60, 96, 62, 80, 44, 56, 36];
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" fill="none">
      <g stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 6">
        <circle cx="120" cy="120" r="86" />
      </g>
      <circle cx="206" cy="120" r="3" fill="rgba(255,255,255,0.6)" />
      <circle cx="46" cy="150" r="3" fill="rgba(255,255,255,0.4)" />
      <g fill="rgba(255,255,255,0.7)">
        {bars.map((h, i) => (
          <rect key={i} x={70 + i * 8} y={120 - h / 2} width="3.5" height={h} rx="1.75" />
        ))}
      </g>
    </svg>
  );
}

const CARDS = [
  { key: "fullcycle", icon: "icon-fullcycle.svg", Figure: RocketFigure },
  { key: "cleancode", icon: "icon-cleancode.svg", Figure: CodeFigure },
  { key: "deadlines", icon: "icon-deadlines.svg", Figure: AudioFigure },
];

const BOTTOM = [
  { key: "realtime", path: "M3 12h4l3 8 4-16 3 8h4" },
  {
    key: "vision",
    path: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  },
  { key: "ux", path: "M4 4h16v12H4zM2 20h20M9 16v4M15 16v4" },
  { key: "predictive", path: "M4 19V5m0 14h16M4 15l5-5 4 4 7-7" },
];

export async function Features({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section className="relative py-16">
      <div className="max-w-[1240px] mx-auto px-6">
        <TechCircle>
          <Badge label={t("technologies.badge")} />
          <h2 className="display mt-5 text-[28px] sm:text-[46px]">
            {t("features.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-[380px] text-[14px] text-white/55">
            {t("features.desc")}
          </p>
          <div className="mt-6">
            <Link href="#contact" className="btn-violet">
              {t("technologies.button")}
            </Link>
          </div>
        </TechCircle>

        <div className="mt-24 grid gap-4 md:grid-cols-3">
          {CARDS.map(({ key, icon, Figure }) => (
            <article
              key={key}
              className="relative flex min-h-[560px] flex-col rounded-[20px] border border-white/[0.07] bg-[#080808] p-5"
            >
              <span className="absolute inset-x-12 top-0 h-px bg-[linear-gradient(90deg,rgba(79,26,214,0),#4F1AD6_50%,rgba(79,26,214,0))]" />
              <div className="px-2 pt-6 text-center">
                <Image
                  src={`/assets/${icon}`}
                  alt=""
                  width={50}
                  height={50}
                  className="mx-auto h-[50px] w-[50px]"
                />
                <h3 className="mx-auto mt-7 max-w-[300px] text-[28px] font-medium leading-[1.2] tracking-[-0.5px]">
                  {t(`features.${key}.title`)}
                </h3>
                <div className="mx-auto mt-6 h-px w-[230px] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)]" />
                <p className="mx-auto mt-5 max-w-[320px] text-[16px] leading-[26px] tracking-[-0.2px] text-white/50">
                  {t(`features.${key}.desc`)}
                </p>
              </div>
              <div
                className="relative mt-auto h-[250px] overflow-hidden rounded-xl border border-white/10"
                style={{
                  background:
                    "radial-gradient(43% 50% at 50% 50%, rgba(15,9,18,0.15) 0%, #0C0912 100%)",
                  boxShadow: "inset 0 10px 25px -1px rgba(79,26,214,0.18)",
                }}
              >
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.3)_0%,rgba(79,26,214,0.15)_100%)]" />
                <div className="absolute inset-6">
                  <Figure />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BOTTOM.map((f) => (
            <div key={f.key} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-violet-bright">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={f.path} />
                  </svg>
                </span>
                <h4 className="text-[16px] font-medium">
                  {t(`features.${f.key}.title`)}
                </h4>
              </div>
              <p className="text-[14px] leading-relaxed text-white/55">
                {t(`features.${f.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
