import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getLocaleResource = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext);
};

const localeResource = getLocaleResource(
  require.context("../_Locale", true, /\.(json)$/)
);
console.table(localeResource);

const resources : any = {
  "ko": {
    translation: {},
  },
  "en-US": {
    translation: {},
  },
  "zh-TW": {
    translation: {},
  }
};

const mergeLocaleResource = () => {
  const targetRes: any = [...localeResource];
  targetRes.forEach((res: { namespace: string; locale: { [x: string]: any } }) => {
    const namespace = res.namespace;
    for (let key in res.locale) {
      const newLocale = res.locale[key];
      if (key in resources) {
        resources[key] = {
          translation: {
            ...resources[key]?.translation,
            ...{
              [namespace]: { ...newLocale },
            },
          },
        };
      }
    }
  });
};
mergeLocaleResource();
console.log(resources);

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;