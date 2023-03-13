import { type AppProps } from 'next/app'
import '../@view/styles/index.css'
import { type PageWithLayout } from '@typing'
import {
    LanguageContextProvider,
    ThemeContextProvider,
    AuthContextProvider,
} from '@view/contexts'

interface PageWithLayoutProps extends AppProps {
    Component: PageWithLayout
}

const App = (props: PageWithLayoutProps) => {
    const { Component, pageProps } = props
    const getLayout = Component.getLayout || ((page) => page)
    return (
        <AuthContextProvider>
            <ThemeContextProvider>
                <LanguageContextProvider>
                    {getLayout(<Component {...pageProps} />)}
                </LanguageContextProvider>
            </ThemeContextProvider>
        </AuthContextProvider>
    )
}

export default App
