import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import PrivateRoute from '../components/privateRoute'
import Profile from '../components/profile'
import Login from '../components/login'

const NotFound = () => <p>Sorry, nothing here</p>

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
      <NotFound default />
      {/* <Login path="/app/*" /> */}
    </Router>
  </Layout>
)

export default App