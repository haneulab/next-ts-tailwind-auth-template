import { useLanguage, useTheme } from '@app-contexts'
import { type RFC } from '@app-types'

export const Theme: RFC = () => {
    const { theme, onThemeSwitch } = useTheme()

    return (
        <button
            onClick={() => onThemeSwitch(theme === 'dark' ? 'light' : 'dark')}
            className="capitalize transition-smooth hover:opacity-60"
        >
            {theme}
        </button>
    )
}

export const Language: RFC = () => {
    const { lang, onLanguageSwitch } = useLanguage()

    return (
        <button
            onClick={() => onLanguageSwitch(lang === 'en' ? 'ko' : 'en')}
            className="capitalize transition-smooth hover:opacity-60"
        >
            {lang}
        </button>
    )
}
