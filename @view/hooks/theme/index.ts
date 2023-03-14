import { useContext } from 'react'
import { ThemeContext } from '@view/contexts'

const useTheme = () => useContext(ThemeContext)

export default useTheme
