import { type IPrimaryLayout } from './Primary.types'
import { type RFC } from '@app-types'
import { FooterLayout } from '../footer'
import { MetaLayout } from '../meta'
import { HeaderLayout } from '../header'

const PrimaryLayout: RFC<IPrimaryLayout> = ({ children, pageMeta }) => {
    return (
        <>
            <MetaLayout {...pageMeta} />
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
