import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { getCurrentLanguagePrefix } from '../utils'

// Import flag SVGs
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

interface LanguageOption {
  code: string
  name: string
  flag: string
}

const languageOptions: LanguageOption[] = [
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

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isLanguageListOpen, setisLanguageListOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = i18n.language || 'en'
  const currentLanguageOption =
    languageOptions.find((lang) => lang.code === currentLang) ||
    languageOptions[0]

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setisLanguageListOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode: string) => {
    const currentPath = location.pathname
    const currentPrefix = getCurrentLanguagePrefix()

    // Remove current language prefix from path
    const pathWithoutLang = currentPrefix
      ? currentPath.replace(currentPrefix, '')
      : currentPath

    // Create new path with selected language
    const newPath =
      langCode === 'en' ? pathWithoutLang : `/${langCode}${pathWithoutLang}`

    // Change language in i18n
    i18n.changeLanguage(langCode)

    // Navigate to new path
    navigate(newPath)

    // Close dropdown
    setisLanguageListOpen(false)
  }

  return (
    <div className='LanguageSelector' ref={dropdownRef}>
      <div
        className='LanguageSelector__button'
        onClick={() => setisLanguageListOpen(!isLanguageListOpen)}
        aria-haspopup='listbox'
        aria-expanded={isLanguageListOpen}
      >
        <img
          src={currentLanguageOption.flag}
          alt={`${currentLanguageOption.name} flag`}
          className='LanguageSelector__flag'
        />
      </div>

      <div className={`LanguageList ${isLanguageListOpen ? 'open' : ''}`}>
        {languageOptions.map((lang) => (
          <div
            key={lang.code}
            className={`LanguageOption ${
              lang.code === currentLang ? 'active' : ''
            }`}
            onClick={() => handleLanguageChange(lang.code)}
          >
            <span className='LanguageSelector__name'>{lang.name}</span>
            <img
              src={lang.flag}
              alt={`${lang.name} flag`}
              className='LanguageSelector__flag'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector
