import type { MetaConfig, StaticRoutes } from '@typeDefs/constants'

/**
 * @type object
 * @brief default Meta config object (used in each page route's getLayout option for the prop of 'PrimaryLayout')
 */
export const DEFAULT_META: MetaConfig = {
    title: 'My App',
    description: 'This is a nextjs application.',
    keywords: ['NextJS', 'TailwindCSS', 'Next Auth', 'TypeScript'],
}

export const STATIC_ROUTES: StaticRoutes = [
    {
        href: '/',
        text: 'Home',
        isCurrentRoute(_router) {
            return _router.pathname === '/'
        },
    },
    {
        href: '/about',
        text: 'About',
        isCurrentRoute(_router) {
            return _router.pathname === '/about'
        },
    },
]
