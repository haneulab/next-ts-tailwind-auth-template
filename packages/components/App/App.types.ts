/* eslint-disable @typescript-eslint/ban-types */
import { type NextPage } from 'next'
import { type AppProps } from 'next/app'

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
    layout?: React.ComponentType
    getLayout?: (_page: React.ReactElement) => React.ReactNode
}

export type AppPropsWithLayout = {
    Component: NextPageWithLayout
} & AppProps
