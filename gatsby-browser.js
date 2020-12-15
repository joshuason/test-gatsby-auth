const React = require("react")
const { Auth0Provider } = require("@auth0/auth0-react")

exports.wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain="joshuason.au.auth0.com"
      clientId="Gpd44TzGzmh9dlZYOBQSq8vp9hqUbQi2"
      redirectUri={window.location.origin}
    >
      {element}
    </Auth0Provider>
  )
}