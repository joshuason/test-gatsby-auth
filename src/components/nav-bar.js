import React from 'react'
import { Link, navigate } from 'gatsby'
import { getUser, isLoggedIn, logout } from '../services/auth'
import { useAuth0 } from "@auth0/auth0-react"

const NavBar = () => {

  const { logout: logoutWithAuth0, isAuthenticated, user } = useAuth0();
  
  let greetingMessage = ""
  if (isLoggedIn() || isAuthenticated) {
    greetingMessage = `Hello ${getUser().name || user.name}`
  } else {
    greetingMessage = "You are not logged in"
  }

  return (
    <div
      className="NavBar"
      style={{
        display: 'flex',
        flex: '1',
        justifyContent: 'space-between',
        borderBottom: '1px solid #d1c1e0',
      }}
    >
      <span>{greetingMessage}</span>

      <nav>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/app/profile">Profile</Link>
        {' '}
        <Link to="/app/external-api">External API</Link>
        {/*isLoggedIn()*/ isAuthenticated && (
          <a
            href="/"
            onClick={event => {
              event.preventDefault();
              logoutWithAuth0({ returnTo: window.location.origin });
            }}
          >
            Logout
          </a>
        )}
      </nav>
    </div>
  )
}

export default NavBar