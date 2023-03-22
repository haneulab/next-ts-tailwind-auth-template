import { type AppPropsWithLayout } from './App.types'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const WithAuth = dynamic(() => import('@nextapp/withauth'))

const App = (appProps: AppPropsWithLayout) => {
    const ProtectedRoutes = ['/account', '/dashboard', '/login']
    const router = useRouter()
    const { Component, pageProps } = appProps
    const getLayout = Component.getLayout || ((_page) => _page)
    return (
        <SessionProvider session={pageProps.session}>
            {getLayout(
                ProtectedRoutes.includes(router.pathname) ? (
                    <WithAuth>
                        <Component {...pageProps} />
                    </WithAuth>
                ) : (
                    <Component {...pageProps} />
                )
            )}
        </SessionProvider>
    )
}

export default App
