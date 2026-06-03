import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const technologies = [
  { name: "React", color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", color: "from-white to-gray-400" },
  { name: "Node.js", color: "from-green-500 to-emerald-500" },
  { name: "Python", color: "from-blue-500 to-yellow-500" },
  { name: "Flutter", color: "from-blue-400 to-cyan-400" },
  { name: "AWS", color: "from-orange-500 to-yellow-500" },
  { name: "Docker", color: "from-blue-500 to-blue-400" },
  { name: "PostgreSQL", color: "from-blue-600 to-indigo-500" },
  { name: "MongoDB", color: "from-green-600 to-green-400" },
  { name: "TypeScript", color: "from-blue-600 to-blue-400" },
  { name: "Go", color: "from-cyan-500 to-cyan-300" },
  { name: "Figma", color: "from-purple-500 to-pink-500" },
];

export async function TechnologiesSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t("technologies.title")}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t("technologies.titleHighlight")}
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-purple-500/30 transition-all flex items-center justify-center">
                <div
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tech.color} opacity-80`}
                />
              </div>
              <span className="text-xs text-gray-400">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
