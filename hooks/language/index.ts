import { LanguageContext } from 'frontend/contexts'
import { useContext } from 'react'

export const useLanguage = () => useContext(LanguageContext)
