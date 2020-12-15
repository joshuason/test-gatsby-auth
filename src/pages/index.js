import React from "react"
import { Link } from 'gatsby'
import { getUser, isLoggedIn } from '../services/auth'
import { useAuth0 } from '@auth0/auth0-react'

import Layout from '../components/layout'

export default function Home() {
  const { isAuthenticated, user, error, logout } = useAuth0();

  if (error) {
    setTimeout(() => logout(), 5000);
  }

  return (
    <Layout>
      <h1>Hello {isAuthenticated ? user.name : "world"}!</h1>
      <p>
        {error 
          ? <em>There's been a slight error: {error.message}</em> 
          : isAuthenticated 
            ? (
                <>
                  You are logged in, so check your{" "}
                  <Link to="/app/profile">profile</Link>
                </>
              ) 
            : (
                <>
                  You should <Link to="/app/login">log in</Link> to see restricted 
                  content
                </>
              )
        }
      </p>
      
    </Layout>
  )
}
