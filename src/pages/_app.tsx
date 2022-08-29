/**
 * tailwind import
 */
import '@tailwindCss'

/**
 * type imports
 */
import type { AppProps } from 'next/app'
import type { PageWithLayout } from '@typeDefs/pages'

/**
 * auth imports
 */
import { SessionProvider } from 'next-auth/react'

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout
}

const Application = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <SessionProvider session={pageProps.session}>
            {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
    )
}

export default Application
