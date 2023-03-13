import { User } from 'firebase/auth'
import { type ReactNode } from 'react'
import { UserSchema } from '../fire/database'

/** THEME CONTEXT TYPING */

export type ThemeOptions<
    ThemeOptionsExtension extends string = 'light' | 'dark'
> = ThemeOptionsExtension

export interface ThemeContextProps {
    theme: ThemeOptions
    onThemeSwitch: ((_theme: ThemeOptions) => void) | null
}

export interface ThemeContextProviderProps {
    children: ReactNode
}

/** LANGUAGE CONTEXT TYPING */
export type LanguageOptions<
    LanguageOptionExtension extends string = 'en' | 'ko'
> = LanguageOptionExtension

export interface LanguageContextProps<LanguageOptions> {
    lang: LanguageOptions
    onLanguageSwitch: ((_lang: LanguageOptions) => void) | null
}

export interface LanguageContextProviderProps {
    children: ReactNode
}

/** AUTH CONTEXT TYPING */
export interface AuthContextProps {
    user: UserSchema
    userId: UserSchema['id']
    sign: {
        in: () => void
        out: () => void
    }
}
export interface AuthContextProiderProps {
    children: ReactNode
}
