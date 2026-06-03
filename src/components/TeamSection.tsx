import Image from "next/image";
import { Badge } from "./Badge";
import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

type Project = {
  img: string;
  title: string;
  person: string;
  role: string;
  wide?: boolean;
};

const PROJECTS: Project[] = [
  { img: "qizlar", title: "Qizlar akademiyasi", person: "Azimov Samandar", role: "Backend Developer" },
  { img: "uzches", title: "Uzchess", person: "Azimov Samandar", role: "Backend Developer" },
  { img: "nexus", title: "Nexus", person: "Azimov Samandar", role: "Backend Developer" },
  { img: "fonus-kids", title: "Fonus Kids", person: "Azimov Samandar", role: "Backend Developer", wide: true },
  { img: "uzches", title: "Uzchess", person: "Azimov Samandar", role: "Backend Developer" },
];

const META =
  "rounded-lg border border-[#373A41] bg-[#13161B]/70 px-2.5 py-1 text-[13px] font-medium text-[#CECFD2] backdrop-blur-sm";

export async function TeamSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

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

        {/* projects grid */}
        <div className="grid w-full auto-rows-[300px] gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
              className={`group relative h-full overflow-hidden rounded-[14px] border border-[#121212] bg-[#0c0c0e] ${
                p.wide ? "lg:col-span-2" : ""
              }`}
            >
              <Image
                src={`/assets/team/${p.img}.png`}
                alt={p.title}
                fill
                sizes={p.wide ? "(min-width:1024px) 66vw, 100vw" : "(min-width:1024px) 33vw, 100vw"}
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* bottom gradient so the text is readable */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5">
                <h3 className="text-[20px] font-medium tracking-[-0.4px] text-white">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  <span className={META}>{p.person}</span>
                  <span className={META}>{p.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
