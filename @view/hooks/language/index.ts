import { LanguageContext } from '@view/contexts'
import { useContext } from 'react'

const useLanguage = () => useContext(LanguageContext)

export default useLanguage
