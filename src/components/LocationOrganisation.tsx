import { organisations } from '../content'

import '../styles/components/LocationOrganisation.scss'

type LocationOrganisationProps = {
  organisationId: string
}

const LocationOrganisation = ({
  organisationId
}: LocationOrganisationProps) => {
  const organisation = organisations[organisationId]
  const { name, website, about, howItWorks } = organisation

  const websiteLabel = website?.replace(/^https?:\/\//, '')

  return (
    <div className='LocationOrganisation'>
      <div className='location-container red'>
        <div className='name'>
          <div className='label'>{name}</div>
          <div className='description'>{about}</div>
        </div>
        <div className='howItWorks'>
          <div className='label'>HOW it WORKS</div>
          <div className='description'>{howItWorks}</div>
        </div>
        <div className='contact'>
          <div className='label'>Contact</div>
          <div className='description'>
            {website && (
              <a href={website} target='_blank' rel='noopener noreferrer'>
                {websiteLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationOrganisation
