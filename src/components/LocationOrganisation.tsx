import { organisations } from '../content'

const LocationOrganisation = ({ organisationId }) => {
  const organisation = organisations[organisationId]

  return <div className='LocationOrganisation'>{organisation.name}</div>
}

export default LocationOrganisation
