import { LANGUAGE_KEY } from "../constant";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem(LANGUAGE_KEY) || "vi",
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => {
    throw err;
  });

export default i18n;
