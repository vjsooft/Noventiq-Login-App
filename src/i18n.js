// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome"
    }
  },
  fr: {
    translation: {
      "welcome": "Bienvenue"
    }
  },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // use if the language detector doesn't detect
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
