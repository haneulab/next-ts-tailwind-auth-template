import type { MetaConfig } from '@typeDefs/constants'
import React, { ReactNode } from 'react'

export interface IPrimaryLayout {
    children: ReactNode
    metaOption?: MetaConfig
}

export type PrimaryLayoutComponent = React.FC<IPrimaryLayout>

export interface IMetaLayout extends MetaConfig {}

export type MetaLayoutComponent = React.FC<IMetaLayout>
