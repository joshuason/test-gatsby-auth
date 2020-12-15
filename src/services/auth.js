// import { useAuth0 } from "@auth0/auth0-react"

// const { logout } = useAuth0();


export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user => 
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


export const handleLogin = ({ username, password }) =>  {
  if (username === 'john' && password === 'pass') {
    return setUser({
      username: 'john',
      name: 'Johnny',
      email: 'johnny@example.org',
    })
  }
  
  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logoutOriginal = callback => {
  setUser({})
  callback()
}

// ---

// const handleAuth0Login = () => {
//   const { loginWithRedirect } = useAuth0();
// }  

// export const auth0Logout = () => {
//   logout({ returnTo: window.location.origin })
// }