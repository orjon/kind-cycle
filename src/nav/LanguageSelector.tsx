import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'

import { languageOptions } from '../constants'

import { buildLangPath } from '../utils'
import { trackEvent } from '../utils/analytics'
import { ClickEvent } from '../types'

import '../styles/nav/LanguageSelector.scss'

type LanguageSelectorProps = {
  onOpen?: () => void
}

const LanguageSelector = ({ onOpen }: LanguageSelectorProps) => {
  const { i18n } = useTranslation()
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

  const languageList = languageOptions.map((language) => (
    <NavLink
      key={language.code}
      className={`LanguageOption NavLink ${language.code === currentLang ? 'active' : ''
        }`}
      to={buildLangPath(location.pathname, language.code)}
      onClick={() => {
        trackEvent(ClickEvent.navigation, {
          nav_item: 'language-selector',
          selected_language: language.code,
          on_page: window.location.href
        })
        setisLanguageListOpen(false)
      }}
    >
      <span className='LanguageSelector__name'>{language.name}</span>
      <img
        src={language.flag}
        alt={`${language.name} flag`}
        className='LanguageSelector__flag'
      />
    </NavLink>
  ))

  return (
    <div className='LanguageSelector' ref={dropdownRef}>
      <div
        className='LanguageSelector__button'
        onClick={() => {
          if (!isLanguageListOpen) onOpen?.()
          setisLanguageListOpen(!isLanguageListOpen)
        }}
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
        {languageList}
      </div>
    </div>
  )
}

export default LanguageSelector
