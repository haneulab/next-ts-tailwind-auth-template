import { createContext, useEffect, useState } from 'react'
import { LanguageContextProviderProps, LanguageOptions } from 'typing'

const LanguageContext = createContext<{
    lang: LanguageOptions
    onLanguageSwitch: ((_lang: LanguageOptions) => void) | null
}>({
    lang: 'en',
    onLanguageSwitch: null,
})

const LanguageContextProvider: React.FC<LanguageContextProviderProps> = ({
    children,
}) => {
    const [lang, setLang] = useState<LanguageOptions>('en')

    function onLanguageSwitch(_lang: LanguageOptions) {
        localStorage.setItem('lang', _lang)
        setLang(_lang)
    }

    function _initialLoader() {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', 'en')
            setLang('en')
        } else {
            setLang(localStorage.getItem('lang') as LanguageOptions)
        }
    }

    useEffect(() => {
        _initialLoader()
    }, [])

    return (
        <LanguageContext.Provider value={{ lang, onLanguageSwitch }}>
            {children}
        </LanguageContext.Provider>
    )
}

export { LanguageContext, LanguageContextProvider }
