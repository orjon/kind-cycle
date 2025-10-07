import { Fragment } from 'react'
import { Route, Navigate } from 'react-router-dom'

function Redirects() {
  return (
    <Fragment>
      <Route
        path='/ferrylane'
        element={<Navigate to='/wastenot/ferrylane' replace />}
      />
      <Route
        path='/haringey'
        element={<Navigate to='/wastenot/haringey' replace />}
      />
    </Fragment>
  )
}

export default Redirects
