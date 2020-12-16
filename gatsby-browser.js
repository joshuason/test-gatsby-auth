const React = require('react');
const { Auth0Provider } = require('@auth0/auth0-react');
const { BrowserRouter } = require('@reach/router');
const { 
  GATSBY_AUTH0_DOMAIN, 
  GATSBY_AUTH0_CLIENT_ID, 
  GATSBY_AUTH0_AUDIENCE 
} = require('./.secrets')

exports.wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={GATSBY_AUTH0_DOMAIN}
      clientId={GATSBY_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={GATSBY_AUTH0_AUDIENCE}
    >
      {element}
    </Auth0Provider>
  )
}