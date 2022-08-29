import React, { ReactNode } from 'react'

export interface IPrimaryLayout {
    children: ReactNode
    metaOption?: MetaConfig
}

export type PrimaryLayoutComponent = React.FC<IPrimaryLayout>

export interface MetaConfig {
    title?: string
    description?: string
    keywords?: string[]
}

export interface IMetaLayout extends MetaConfig {}

export type MetaLayoutComponent = React.FC<IMetaLayout>
