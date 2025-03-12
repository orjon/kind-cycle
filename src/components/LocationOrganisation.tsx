import { organisations } from '../content'

type LocationOrganisationProps = {
  organisationId: string
}

const LocationOrganisation = ({
  organisationId
}: LocationOrganisationProps) => {
  const organisation = organisations[organisationId]

  return <div className='LocationOrganisation'>{organisation.name}</div>
}

export default LocationOrganisation
