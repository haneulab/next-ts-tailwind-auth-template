import { ThemeContext } from 'frontend/contexts'
import { useContext } from 'react'

export const useTheme = () => useContext(ThemeContext)
