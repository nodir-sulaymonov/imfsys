import Link from "next/link";
import { Badge } from "./Badge";
import { SunRays } from "./SunRays";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const ICON_PATHS: Record<string, string> = {
  web: "M3 5h18v11H3zM2 20h20M10 16l-.5 4M14 16l.5 4",
  mobile: "M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM10.5 18h3",
  backend: "M8 9l-3 3 3 3M16 9l3 3-3 3M13.5 7l-3 10",
  uiux: "M14 4l6 6M4 20s1-4 4-4 3 3 3 3M18 6l-9 9-2-2 9-9 2 2Z",
  devops: "M7 18a4 4 0 0 1-.5-7.97A5 5 0 0 1 16 8.5a3.5 3.5 0 0 1 1 6.85",
  ai: "M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3ZM18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14Z",
  bi: "M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3M8 7h8M16 7l-2-2M16 7l-2 2",
};

const SERVICES = [
  { key: "web", badges: ["React", "Next.js", "Node.js"] },
  { key: "mobile", badges: ["Flutter", "React Native", "Swift"] },
  { key: "backend", badges: ["NestJS", "PostgreSQL", "GraphQL"] },
  { key: "uiux", badges: ["Figma", "Claude Design", "Prototyping"] },
  { key: "devops", badges: ["Docker", "Kubernetes", "AWS"] },
  { key: "ai", badges: ["OpenAI", "LangChain", "RAG"] },
  { key: "bi", badges: ["OpenAI", "Claude", "LangChain", "PostgreSQL", "Power BI", "Looker Studio"] },
];

export async function ServicesSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section id="services" className="relative pt-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[20px] px-5 py-20 sm:px-10 lg:px-16">
          <SunRays />

          {/* header */}
          <div className="relative z-10 text-center">
            <Badge label={t("services.badge")} />
            <h2 className="mx-auto mt-6 max-w-[640px] bg-[linear-gradient(90deg,#fff,rgba(255,255,255,0.55))] bg-clip-text text-[34px] font-normal leading-[1.25] tracking-[-1.5px] text-transparent sm:text-[52px]">
              {t("services.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-[540px] text-[15px] leading-relaxed text-white/60">
              {t("services.desc")}
            </p>
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-[10px] border-[3px] border-white/15 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:border-white/30"
              >
                {t("services.book")}
              </Link>
            </div>
          </div>

          {/* cards */}
          <div className="relative z-10 mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.key}
                className="relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-[#080808] p-7"
              >
                <span className="absolute inset-x-14 top-0 h-px bg-[linear-gradient(90deg,rgba(79,26,214,0),#4F1AD6_50%,rgba(79,26,214,0))]" />
                <span className="absolute inset-x-14 bottom-0 h-px bg-[linear-gradient(90deg,rgba(79,26,214,0),#4F1AD6_50%,rgba(79,26,214,0))]" />

                <span className="inline-flex h-[45px] w-[45px] items-center justify-center rounded-[14px] bg-gradient-to-b from-[#4f1ad6] to-[#8059e3] text-white ring-2 ring-white/15">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={ICON_PATHS[s.key]} />
                  </svg>
                </span>

                <h3 className="mt-6 text-[20px] font-medium tracking-[-0.5px]">
                  {t(`services.items.${s.key}.title`)}
                </h3>
                <p className="mt-3 text-[15px] leading-[26px] tracking-[-0.2px] text-white/60">
                  {t(`services.items.${s.key}.desc`)}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {s.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-lg border border-[#373A41] bg-[#13161B] px-2.5 py-1 text-[13px] font-medium text-[#CECFD2]"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
