import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import your translation files
import enTranslations from './locales/en.json'
import trTranslations from './locales/tr.json'
import ptTranslations from './locales/pt.json'
import esTranslations from './locales/es.json'
import akTranslations from './locales/ak.json'
import bnTranslations from './locales/bn.json'
import frTranslations from './locales/fr.json'
import plTranslations from './locales/pl.json'

const resources = {
  en: {
    translation: enTranslations
  },
  tr: {
    translation: trTranslations
  },
  pt: {
    translation: ptTranslations
  },
  es: {
    translation: esTranslations
  },
  ak: {
    translation: akTranslations
  },
  bn: {
    translation: bnTranslations
  },
  fr: {
    translation: frTranslations
  },
  pl: {
    translation: plTranslations
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already escapes values
  }
})

export default i18n
