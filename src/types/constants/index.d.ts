import { NextRouter } from 'next/router'

export interface MetaConfig {
    title?: string
    description?: string
    keywords?: string[]
}

export interface IBaseLink {
    href: string
    text: string
}

export interface IStaticRoute extends IBaseLink {
    isCurrentRoute: (_router: NextRouter) => boolean
}

export type StaticRoutes = Array<IStaticRoute>
