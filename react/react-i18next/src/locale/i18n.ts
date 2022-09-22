import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import ko from "./ko.json";

const resources = {
  en: {
    translation: {
      "Welcome": "Good morning."
    }
  },
  ko: {
    translation: {
      "Welcome": "좋은 아침 입니다."
    }
  }
};
i18n
  .use(initReactI18next)
  .init({
    // resources,
    resources : {
      en: {
        translation: en,
      },
      ko: {
        translation: ko,
      }
    },
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;