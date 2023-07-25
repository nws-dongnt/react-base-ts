import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "i18n/en";
import vi from "i18n/vi";

declare module "i18next" {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface i18n {
    fallbackLng: string;
  }
}

export const ENGLISH = "en";
export const VIETNAMESE = "vi";

export const debugLanguage = process.env.REACT_APP_ENV === "local";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: debugLanguage,
    resources: {
      [VIETNAMESE]: { translation: vi },
      [ENGLISH]: { translation: en },
      ...(debugLanguage ? { debug: { translation: {} } } : {}),
    },
    ...(!debugLanguage ? { fallbackLng: VIETNAMESE } : {}),
  });

i18n.fallbackLng = VIETNAMESE;

export default i18n;
