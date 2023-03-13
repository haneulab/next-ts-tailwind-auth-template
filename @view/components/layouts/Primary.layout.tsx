import { type RFC, type IPrimaryLayout } from '@typing'
import FooterLayout from './Footer.layout'
import HeaderLayout from './Header.layout'

const PrimaryLayout: RFC<IPrimaryLayout> = ({ children }) => {
    return (
        <>
            <HeaderLayout />
            <main>{children}</main>
            <FooterLayout />
        </>
    )
}

export default PrimaryLayout
