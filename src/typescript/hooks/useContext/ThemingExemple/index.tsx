import { createContext, useContext } from 'react'
import { theme } from './theme'

type ThemeContextProviderProps = { children: React.ReactNode }

export const ThemeContext = createContext(theme)

export const ThemingContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheming = () => useContext(ThemeContext)
