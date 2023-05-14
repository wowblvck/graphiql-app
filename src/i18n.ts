import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('GraphiQLLang') || 'en',
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: './locales/{{lng}}.json',
    },
  });

export default i18n;
