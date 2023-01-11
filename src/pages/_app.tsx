import '../styles/index.css'
import {
    LanguageContextProvider,
    ThemeContextProvider,
} from '@haneulab/react-apis'
import { type PageWithLayout } from 'apps/types/declaration'
import type { AppProps } from 'next/app'

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
