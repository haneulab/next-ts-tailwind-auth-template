/**
 * tailwind import
 */
import '@tailwindCss'

/**
 * type imports
 */
import type { AppProps } from 'next/app'
import type { PageWithLayout } from '@typeDefs/pages'

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout
}

const Application = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}

export default Application
