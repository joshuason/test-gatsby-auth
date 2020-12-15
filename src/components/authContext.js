import { useContext, useEffect } from "react";

export const AuthContext = React.createContext(defaultContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({
  children,
  ...initOptions,
}) => {
  const [authClient, setAuthClient] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      // initialize the auth client
      const authFromHook = await createAuthClient(initOptions);
      setAuth(authFromHook);

      // check if we're in the middle of a redirect
      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        const { appState } = await authFromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      // set initial state using hooks
      const isAuthenticated = await authFromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await authFromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    }
    initAuth();
  }, [])

  const handleRedirectCallback = async () => {
    // handle callback
    // use hooks to set state
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        token,
        loading,
        handleRedirectCallback,
        getToken: (...p) => authClient.getTokenSilently(...p),
        logout: (...p) => authClient.logout(...p),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}