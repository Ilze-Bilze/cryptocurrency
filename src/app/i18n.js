import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import translationsInEn from './locales/en/translation.json';
import translationsInFr from './locales/fr/translation.json';
import translationsInEs from './locales/es/translation.json';
import translationsInDe from './locales/de/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEn
  },
  fr: {
    translation: translationsInFr
  },
  es: {
    translation: translationsInEs
  },
  de: {
    translation: translationsInDe
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources, // resources are important to load translations for the languages.
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;