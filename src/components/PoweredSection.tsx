import { getTranslation } from "@/i18n/server";
import { type Locale } from "@/i18n/settings";

const services = [
  { key: "web", icon: "🌐" },
  { key: "mobile", icon: "📱" },
  { key: "design", icon: "🎨" },
  { key: "cloud", icon: "☁️" },
  { key: "ai", icon: "🤖" },
  { key: "consulting", icon: "💼" },
] as const;

export async function PoweredSection({ locale }: { locale: Locale }) {
  const { t } = await getTranslation(locale);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {t("powered.badge")}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
            {t("powered.title")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service) => (
            <div
              key={service.key}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all"
            >
              <span className="text-3xl">{service.icon}</span>
              <span className="text-sm text-gray-300 text-center">
                {t(`powered.items.${service.key}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
