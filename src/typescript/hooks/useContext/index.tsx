import { User } from './FutureValue/User'
import { UserContextProvider } from './FutureValue/UserContext'
import { ThemingContextProvider } from './ThemingExemple'
import Box from './ThemingExemple/Box'

const UseContextHook = () => {
  return (
    <>
      <h4>+ Theming Exemple</h4>
      <div>
        <ThemingContextProvider>
          <Box />
        </ThemingContextProvider>
      </div>

      <h4>+ Future Value</h4>
      <div>
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
    </>
  )
}

export default UseContextHook
