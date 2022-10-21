import { useState } from 'react'

/*
Nesse caso, como o state inicial é declarado, ele usa inferência e assume o
valor daquela stateno caso do exemplo a seguir, ele assume que é um boleano 
 */

const SimpleInference = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {loggedIn && <div>User is ON</div>}
      {!loggedIn && <div>User is OFF</div>}
    </div>
  )
}

export default SimpleInference
