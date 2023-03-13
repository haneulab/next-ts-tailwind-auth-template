import { type RFC, type IPrimaryLayout } from 'typing'
import FooterLayout from './footer.layout'
import HeaderLayout from './header.layout'

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
