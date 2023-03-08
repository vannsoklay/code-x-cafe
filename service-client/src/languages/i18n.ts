import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "http://localhost:5173";

i18n
  .use(i18nBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "kh",
    lng: "kh",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${getCurrentHost}/locales/{{lng}}.json`,
    },
  });

export default i18n;
