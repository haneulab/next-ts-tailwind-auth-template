/* eslint-disable @typescript-eslint/ban-types */
import { type NextPage } from 'next'
import { type Session } from 'next-auth'
import { type AppProps } from 'next/app'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    layout?: React.ComponentType
    getLayout?: (_page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout<P = Record<string, unknown>> = {
    Component: NextPageWithLayout
} & AppProps<P> & {
        pageProps: P & {
            session?: Session
        }
    }
