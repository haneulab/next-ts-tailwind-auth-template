import { type ReactNode, ComponentType, ReactElement } from 'react'
import { type NextPage } from 'next'
import { type CustomComponent } from '@haneulab/react-apis'

interface MyAppGenericProps {
    className?: string
    children?: ReactNode
}

export type MyAppComponent<Props extends {} = {}> = CustomComponent<
    Props,
    MyAppGenericProps
>

type GetLayoutProps = (_page: ReactElement) => ReactNode

export interface IPageWithLayout {
    getLayout?: GetLayoutProps
    layout?: ComponentType
}
export type PageWithLayout<P extends {} = {}> = NextPage<P> & IPageWithLayout
