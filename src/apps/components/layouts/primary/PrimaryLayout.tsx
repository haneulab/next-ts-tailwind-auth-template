import { type IPrimaryLayout } from './Primary.types'
import { type MyAppComponent } from '@typeDefs'
import { FooterLayout } from '../footer'
import { HeaderLayout } from '../header'
import { MetaLayout } from '../meta'

const PrimaryLayout: MyAppComponent<IPrimaryLayout> = ({
    children,
    title,
    description,
    keywords,
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
