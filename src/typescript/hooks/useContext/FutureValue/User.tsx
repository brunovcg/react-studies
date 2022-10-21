import { useUser, AuthUser } from './UserContext'

export const User = () => {
  const { user, setUser } = useUser()

  const handleLogin = () => {
    setUser({ name: 'Bruno', email: 'brunovcg' })
  }

  const handleLogout = () => {
    setUser({} as AuthUser)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <div>Username is: {user.name}</div>
      <div>email is {user.email} </div>
    </div>
  )
}
