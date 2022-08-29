/**
 * list of all constant variable & exports
 */

import type { MetaConfig } from '@typeDefs/components/layouts'
import type { ThemeOptions } from '@typeDefs/constants'

/**
 * @type ThemeOptions
 * @brief THEME is a constant for theme option, default set to string literal 'light'. Can be changed to 'dark'
 */
export const THEME: ThemeOptions = 'light'

/**
 * @type string
 * @brief Some example message, default set to 'Hello World!'
 */
export const MESSAGE: string = 'Hello World!'

/**
 * @type object
 * @brief default Meta config object (used in each page route's getLayout option for the prop of 'PrimaryLayout')
 */
export const DEFAULT_META: MetaConfig = {
    title: 'My App',
    description: 'This is a nextjs application.',
    keywords: ['NextJS', 'TailwindCSS', 'Next Auth', 'TypeScript'],
}
