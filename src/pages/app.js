import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/layout'
import PrivateRoute from '../components/privateRoute'
import Profile from '../components/profile'
import Login from '../components/login'
// import { Auth0Provider } from '@auth0/auth0-react'
import LoginAuth0Button from '../components/loginAuth0'
import { render } from 'react-dom'

const NotFound = () => <p>Sorry, nothing here</p>

// export class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true }
//   }

//   // componentDidCatch(error, errorInfo) {
//   //   log
//   // }

//   render() {
//     return (
//       <>
//         {this.state.hasError && <h1>There's an error!</h1>}
//         {this.props.children}
//       </>
//     )
//   }
    
// }

const App = () => (
  // <ErrorBoundary>
    <Layout>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        {/* <Login path="/app/login" /> */}
        <LoginAuth0Button path="/app/login/" />
        <NotFound default />
        {/* <Login path="/app/*" /> */}
      </Router>
    </Layout>
  // </ErrorBoundary>
)

export default App