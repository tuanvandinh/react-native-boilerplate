import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  //  en: {
  //    translation: require("../assets/locales/en/translation.json")
  //  },
  //  de: {
  //    translation: require("../assets/locales/de/translation.json")
  //  }
};

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lng: "de",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
