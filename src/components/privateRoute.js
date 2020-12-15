import React from 'react'
import { navigate } from 'gatsby'
import { useAuth0 } from "@auth0/auth0-react"

const PrivateRoute = ({ component: Component, location,  ...rest }) => {

  const { isAuthenticated, user } = useAuth0();
  console.log({isAuthenticated}, {user})

  if (!isAuthenticated && location.pathname !== `/app/login`) {
    navigate("/app/login")
    console.log('PR: not signed in')
    return null
  } 

  console.log('PR: already signed in')
  return <Component {...rest} />
}

export default PrivateRoute