import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from './translations/es-ES.json';
import eu from './translations/eu-ES.json';

const resources = {
  'es-ES': {
    translations: es
  },
  'eu-ES': {
    translations: eu
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // we init with resources
    resources: resources,
    lng: "es-ES",
    keySeparator: '.',
    fallbackLng: ['es-ES', 'eu-ES'],
    // debug only when not in production
    debug: process.env.NODE_ENV !== 'production',
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
      formatSeparator: '.',
    },
    react: {
      wait: true,
    },
  });

export default i18n;