import { useContext } from 'react'
import { LanguageContext } from '@view/contexts'

const useLanguage = () => useContext(LanguageContext)

export default useLanguage
