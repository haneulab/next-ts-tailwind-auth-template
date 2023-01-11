import { type IPrimaryLayout } from './Primary.types'
import { type RFC } from 'apps/types/declaration'
import FooterLayout from '../footer/FooterLayout'
import HeaderLayout from '../header/HeaderLayout'
import MetaLayout from '../meta/MetaLayout'

const PrimaryLayout: RFC<IPrimaryLayout> = ({
    children,
    title = '',
    description = '',
    keywords = null,
}) => {
    return (
        <>
            <MetaLayout
                title={title}
                description={description}
                keywords={keywords}
            />
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
