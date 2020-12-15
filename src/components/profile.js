import React from 'react'
import { getUser } from '../services/auth'
import { useAuth0 } from '@auth0/auth0-react'

const Profile = () => {
  console.log('Profile loaded')
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h1>Your profile</h1>
        <ul>
          <li>Name: {user.name}</li>
          <li>E-mail: {user.email}</li>
        </ul>
      </div>
    )
  )
}

export default Profile