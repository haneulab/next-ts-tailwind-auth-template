import '@app-styles'
import { type PageWithLayout } from '@app-types'
import { type AppProps } from 'next/app'
import { LanguageContextProvider, ThemeContextProvider } from '@app-contexts'

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout
}

const App = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <ThemeContextProvider>
            <LanguageContextProvider>
                {getLayout(<Component {...pageProps} />)}
            </LanguageContextProvider>
        </ThemeContextProvider>
    )
}

export default App
