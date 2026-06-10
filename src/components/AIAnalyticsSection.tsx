import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

type AIAnalytics = {
  badge: string;
  title: string;
  intro: string[];
  connect: string;
  bullets: string[];
  ask: string;
  questions: string[];
};

const HL =
  "absolute inset-x-0 h-px bg-[linear-gradient(90deg,rgba(79,26,214,0),#4F1AD6_50%,rgba(79,26,214,0))]";

export async function AIAnalyticsSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  const ai = t("aiAnalytics", { returnObjects: true }) as AIAnalytics;

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <div className="relative isolate overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#080808] px-5 py-12 sm:px-8 lg:px-12">
          <span className={`${HL} top-0`} />
          <span className={`${HL} bottom-0`} />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_80%_at_75%_0%,rgba(79,26,214,0.34),transparent_60%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Badge label={ai.badge} />
              <h2 className="mt-6 max-w-[640px] bg-[linear-gradient(90deg,#fff,rgba(255,255,255,0.35))] bg-clip-text text-[34px] font-normal leading-[1.2] tracking-[-1.5px] text-transparent sm:text-[52px]">
                {ai.title}
              </h2>
              <div className="mt-6 space-y-4 text-[16px] leading-[27px] tracking-[-0.2px] text-white/62">
                {ai.intro.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p>{ai.connect}</p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[14px] border border-white/[0.08] bg-black/35 p-5 sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {ai.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-[15px] leading-[24px] text-white/78">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4f1ad6] text-[12px] font-semibold text-white">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[14px] border border-white/[0.08] bg-[#13161B] p-5 sm:p-6">
                <p className="text-[15px] leading-[24px] text-white/62">{ai.ask}</p>
                <div className="mt-4 grid gap-3">
                  {ai.questions.map((question) => (
                    <div
                      key={question}
                      className="rounded-[10px] border border-white/[0.08] bg-black/35 px-4 py-3 text-[16px] leading-[24px] text-white"
                    >
                      “{question}”
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
