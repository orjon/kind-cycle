import { useTranslation } from 'react-i18next'
import { organisations } from '../content'
import { trackEvent } from '../utils/analytics'
import { ClickEvent } from '../types/types'

import '../styles/components/LocationOrganisation.scss'

type LocationOrganisationProps = {
  organisationId: string
  colors: { text: string; border: string }
}

const LocationOrganisation = ({
  organisationId,
  colors
}: LocationOrganisationProps) => {
  const { t } = useTranslation()
  const organisation = organisations[organisationId]
  const { website } = organisation

  // Try to get translated website label, fall back to cleaned URL
  const getWebsiteLabel = () => {
    const translatedLabel = t(`organisations.${organisationId}.websiteLabel`, {
      defaultValue: ''
    })
    if (translatedLabel) {
      return translatedLabel
    }
    return website?.url.replace(/^https?:\/\//, '') || ''
  }

  const websiteLabel = getWebsiteLabel()

  const trackClick = () => {
    trackEvent(ClickEvent.organisation, {
      organisation: t(`organisations.${organisationId}.name`),
      on_page: window.location.href
    })
  }

  return (
    <div className='LocationOrganisation'>
      <div className={`location-container ${colors.border}`}>
        <div className='name'>
          <div className={`label ${colors.text}`}>
            {t(`organisations.${organisationId}.name`)}
          </div>
          <div className='description'>
            {t(`organisations.${organisationId}.about`)}
          </div>
        </div>
        <div className='howItWorks'>
          <div className={`label ${colors.text}`}>
            {t('organisations.howItWorksLabel', {
              defaultValue: 'How It Works'
            })}
          </div>
          <div className='description'>
            {t(`organisations.${organisationId}.howItWorks`)}
          </div>
        </div>
        <div className={`contact ${colors.text}`}>
          {website && (
            <a
              href={website.url}
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              onClick={trackClick}
            >
              {websiteLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default LocationOrganisation
