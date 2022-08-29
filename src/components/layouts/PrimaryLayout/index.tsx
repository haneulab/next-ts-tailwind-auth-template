/**
 * type imports
 */
import { DEFAULT_META } from '@constants'
import type { PrimaryLayoutComponent } from '@typeDefs/components/layouts'
/**
 * component imports
 */
import FooterLayout from '../FooterLayout'
import HeaderLayout from '../HeaderLayout'
import MetaLayout from '../MetaLayout'

const PrimaryLayout: PrimaryLayoutComponent = ({ children, metaOption }) => {
    return (
        <>
            {metaOption ? (
                <MetaLayout {...metaOption} />
            ) : (
                <MetaLayout {...DEFAULT_META} />
            )}
            <div id="layout">
                <HeaderLayout />
                <main>{children}</main>
                <FooterLayout />
            </div>
        </>
    )
}

export default PrimaryLayout
