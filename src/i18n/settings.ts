export const fallbackLng = "en";
export const languages = ["en", "ru", "uz"] as const;
export type Locale = (typeof languages)[number];

export const defaultNS = "common";

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
