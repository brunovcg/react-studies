import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

const FutureValue = () => {
  // const [user, setUser] = useState<null | AuthUser>(null)
  // ou usando type Assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser)

  const handleLogin = () => {
    setUser({
      name: 'Bruno',
      email: 'brunovcg@gmail.com',
    })
  }
  const handleLogout = () => {
    // setUser(null)
    // ou
    setUser({} as AuthUser)
  }

  return (
    <div>
      <button onClick={handleLogin}>LOGIN</button>
      <button onClick={handleLogout}>LOGOUT</button>

      {/* Tem que usar p ? por que user pode ser null!!  ou usae Type Assertion*/}

      {/* <div>Username is {user?.name}</div> */}
      {/*  ou */}
      <div>Username is {user.name}</div>

      {/* <div>Usermail is {user?.email}</div> */}
      {/*  ou */}
      <div>Usermail is {user.email}</div>
    </div>
  )
}

export default FutureValue
