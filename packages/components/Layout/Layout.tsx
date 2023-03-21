import dynamic from 'next/dynamic'
import type { ILayout } from './Layout.types'

const Header = dynamic(() => import('@nextapp/Header'))
const Footer = dynamic(() => import('@nextapp/Footer'))

const Layout = (props: ILayout) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
