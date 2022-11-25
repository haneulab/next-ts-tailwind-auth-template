import { UI } from '@app/types/components'
import { defaultMetaOption } from '@app/_constants'
import { ReactNode } from 'react'
import FooterLayout from './footer-layout'
import HeaderLayout from './header-layout'
import MetaLayout from './meta-layout'

interface IPrimaryLayout {
    pageMeta?: {
        title?: string
        description?: string
        keywords?: string[]
    }
    children: ReactNode
}

const PrimaryLayout: UI<IPrimaryLayout> = (props) => {
    const { pageMeta, children } = props

    return (
        <>
            {pageMeta ? (
                <MetaLayout {...pageMeta} />
            ) : (
                <MetaLayout {...defaultMetaOption} />
            )}
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
