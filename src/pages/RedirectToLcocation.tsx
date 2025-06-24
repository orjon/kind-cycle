import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const RedirectToLocation = () => {
  const { locationId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (locationId) {
      navigate(`/wastenot/${locationId}`, { replace: true })
    } else {
      navigate('/', { replace: true })
    }
  }, [locationId, navigate])

  return null
}

export default RedirectToLocation
