import type { NextPage } from 'next'
import type { ComponentType, ReactElement, ReactNode } from 'react'

export interface IPageWithLayout {
    getLayout?: (_page: ReactElement) => ReactNode
    layout?: ComponentType
}

export type PageWithLayout<P = {}> = NextPage<P> & IPageWithLayout
