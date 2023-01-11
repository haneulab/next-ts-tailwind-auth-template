import React, { type ReactNode, ComponentType, ReactElement } from 'react'
import type { NextPage } from 'next'

interface GenericComponentInterface {
    className?: string
    children?: ReactNode
}

type GenericRFC<ThisComponentProps extends object = {}> = React.FC<
    GenericComponentInterface & ThisComponentProps
>

export type RFC<I extends object = {}> = GenericRFC<I>

type GetLayoutProps = (_page: ReactElement) => ReactNode

export interface IPageWithLayout {
    getLayout?: GetLayoutProps
    layout?: ComponentType
}
export type PageWithLayout<P extends {} = {}> = NextPage<P> & IPageWithLayout
