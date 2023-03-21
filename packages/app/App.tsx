import { type AppPropsWithLayout } from './types'

const App = (appProps: AppPropsWithLayout) => {
    const { Component, pageProps } = appProps
    const getLayout = Component.getLayout || ((_page) => _page)
    return getLayout(<Component {...pageProps} />)
}

export default App
