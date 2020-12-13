import React from 'react'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../services/auth'

const PrivateRoute = ({ component: Component, location,  ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    console.log('PR: not signed in')
    return null
  }

  console.log('PR: already signed in')
  return <Component {...rest} />
}

export default PrivateRoute