import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'

const useLogin = ({username, password}) => {
  const login = {
    username: username || '',
    password: password || '',
  }

  const setLogin = ({target: {name, value}}) => (
    login[name] = value
  )

  return [
    login,
    event => setLogin(event)
  ]
}

const Login = () => {
  const [ login, setLogin ] = useLogin({username: '', password: ''})
  // const [ username, setUsername ] = useState('')
  // const [ password, setPassword ] = useState('')

  const handleUpdate = event => //{
    // switch(event.target.name) {
    //   case 'username':
    //     setUsername(event.target.value) 
    //     break
    //   case 'password':
    //     setPassword(event.target.value)
    //     break
    //   default:
    //     break
    // }
    setLogin(event)
  //}

  const handleSubmit = event => {
    event.preventDefault()
    const { username, password } = login
    handleLogin({ username, password })
  }

  if (isLoggedIn()) {
    navigate(`/app/profile`)
  }

  return (
    <>
      <h1>Log in</h1>
      <form
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/app/profile`)
        }}
      >
        <label>
          Username 
          <input type="text" name="username" onChange={handleUpdate} />
        </label>
        <label>
          Password
          <input 
            type="password"
            name="password"
            onChange={handleUpdate}
          />
        </label>
        <input type="submit" value="Log In" />
      </form>
    </>
  )
}

export default Login