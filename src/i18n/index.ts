import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable Suspense for better compatibility
    },
  });

export default i18n;
