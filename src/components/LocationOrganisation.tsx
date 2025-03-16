import { organisations } from '../content'

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

  const websiteLabel = website?.replace(/^https?:\/\//, '')

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
            <a href={website} target='_blank' rel='noopener noreferrer'>
              {websiteLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default LocationOrganisation
