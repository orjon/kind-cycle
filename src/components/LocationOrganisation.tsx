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
  const organisation = organisations[organisationId]
  const { name, website, about, howItWorks } = organisation

  const websiteLabel =
    website?.label || website?.url.replace(/^https?:\/\//, '')

  const trackClick = () => {
    trackEvent(ClickEvent.organisation, {
      organisation: name,
      on_page: window.location.href
    })
  }

  return (
    <div className='LocationOrganisation'>
      <div className={`location-container ${colors.border}`}>
        <div className='name'>
          <div className={`label ${colors.text}`}>{name}</div>
          <div className='description'>{about}</div>
        </div>
        <div className='howItWorks'>
          <div className={`label ${colors.text}`}>How It Works</div>
          <div className='description'>{howItWorks}</div>
        </div>
        <div className={`contact ${colors.text}`}>
          {website && (
            <a
              href={website.url}
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
