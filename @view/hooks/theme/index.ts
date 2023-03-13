import { ThemeContext } from '@view/contexts'
import { useContext } from 'react'

const useTheme = () => useContext(ThemeContext)

export default useTheme
