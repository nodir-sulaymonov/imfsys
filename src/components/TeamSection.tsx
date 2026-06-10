import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

type Group = {
  title: string;
  projects: string[];
};

const META =
  "rounded-lg border border-[#373A41] bg-[#13161B]/70 px-2.5 py-1 text-[13px] font-medium text-[#CECFD2] backdrop-blur-sm";

export async function TeamSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);
  const groups = t("team.groups", { returnObjects: true }) as Group[];

  return (
    <section id="team" className="relative py-16">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-10 px-4 sm:px-6">
        {/* header */}
        <div className="flex flex-col items-center gap-3 text-center">
          <Badge label={t("team.badge")} />
          <h2 className="mx-auto mt-3 max-w-[680px] bg-[linear-gradient(90deg,#fff,rgba(255,255,255,0.3))] bg-clip-text text-[34px] font-normal leading-[1.3] tracking-[-1.9px] text-transparent sm:text-[52px]">
            {t("team.title")}
          </h2>
          <p className="mx-auto max-w-[630px] text-[16px] leading-[26px] tracking-[-0.2px] text-white/60">
            {t("team.desc")}
          </p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article
              key={group.title}
              className="relative overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#080808] p-6"
            >
              <span className="absolute inset-x-10 top-0 h-px bg-[linear-gradient(90deg,rgba(79,26,214,0),#4F1AD6_50%,rgba(79,26,214,0))]" />
              <h3 className="text-[22px] font-medium tracking-[-0.5px] text-white">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.projects.map((project) => (
                  <span key={project} className={META}>
                    {project}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
