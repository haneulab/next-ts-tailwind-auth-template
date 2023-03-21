import { type AppPropsWithLayout } from './App.types'

const App = (appProps: AppPropsWithLayout) => {
    const { Component, pageProps } = appProps
    const getLayout = Component.getLayout || ((_page) => _page)
    return getLayout(<Component {...pageProps} />)
}

export default App
