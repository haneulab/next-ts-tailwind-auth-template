import { type RFC } from '@typing'
import { useLanguage, useTheme } from '@view/hooks'
import { MdLanguage } from 'react-icons/md'
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
            className="flex items-center text-sm capitalize transition-smooth hover:opacity-60 gap-x-2 lg:hover:opacity-60 font-head[en]-inter"
        >
            <MdLanguage className="text-xl" />
            <span>{lang === 'en' ? '한국어' : 'English'}</span>
        </button>
    )
}

const Switch = {
    Language,
    Theme,
}

export default Switch
