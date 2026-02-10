import { LanguageOption } from '../types'

import gbFlag from '../assets/flags/gb.svg'
import trFlag from '../assets/flags/tr.svg'
import ptFlag from '../assets/flags/pt.svg'
import esFlag from '../assets/flags/es.svg'
import ghFlag from '../assets/flags/gh.svg'
import bdFlag from '../assets/flags/bd.svg'
import frFlag from '../assets/flags/fr.svg'
import plFlag from '../assets/flags/pl.svg'
import bgFlag from '../assets/flags/bg.svg'
import soFlag from '../assets/flags/so.svg'

export const languageOptions: LanguageOption[] = [
  { code: 'en', name: 'English', flag: gbFlag },
  { code: 'ak', name: 'Akan', flag: ghFlag },
  { code: 'bn', name: 'বাংলা', flag: bdFlag },
  { code: 'bg', name: 'Български', flag: bgFlag },
  { code: 'es', name: 'Español', flag: esFlag },
  { code: 'fr', name: 'Français', flag: frFlag },
  { code: 'pl', name: 'Polski', flag: plFlag },
  { code: 'pt', name: 'Português', flag: ptFlag },
  { code: 'so', name: 'Soomaaliga', flag: soFlag },
  { code: 'tr', name: 'Türkçe', flag: trFlag }
]

export const supportedLangs = languageOptions.map((lang) => lang.code)
