import { organisations } from '../content'

import '../styles/components/LocationOrganisation.scss'

type LocationOrganisationProps = {
  organisationId: string
}

const LocationOrganisation = ({
  organisationId
}: LocationOrganisationProps) => {
  const organisation = organisations[organisationId]
  const { name, website, about } = organisation

  const websiteLabel = website?.replace(/^https?:\/\//, '')

  return (
    <div className='LocationOrganisation'>
      <div className='details'>
        <div className='name'>{name}</div>
        {website && (
          <div className='website'>
            <a href={website} target='_blank' rel='noopener noreferrer'>
              {websiteLabel}
            </a>
          </div>
        )}
        <div className='about'>{about}</div>
      </div>
    </div>
  )
}

export default LocationOrganisation
