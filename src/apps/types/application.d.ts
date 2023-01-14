import { type ReactNode, ComponentType, ReactElement } from 'react'
import { type NextPage } from 'next'
import { type CustomComponent } from '@haneulab/react-apis'

export interface ApplicationGenericComponentProps {
    className?: string
    children?: ReactNode
}

export type ApplicationComponent<Props extends {} = {}> = CustomComponent<
    Props,
    ApplicationGenericComponentProps
>

export type GetLayout = (_page: ReactElement) => ReactNode

export interface IPageWithLayout {
    getLayout?: GetLayout
    layout?: ComponentType
}
export type PageWithLayout<P extends {} = {}> = NextPage<P> & IPageWithLayout
