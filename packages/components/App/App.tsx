import { type AppPropsWithLayout } from './App.types'
import { SessionProvider } from 'next-auth/react'

const App = (appProps: AppPropsWithLayout) => {
    const { Component, pageProps } = appProps
    const getLayout = Component.getLayout || ((_page) => _page)
    return getLayout(
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default App
