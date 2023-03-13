import { type RFC } from 'typing'
import { useLanguage, useTheme } from 'frontend/hooks'

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

const Switch = {
    Language,
    Theme,
}

export default Switch
