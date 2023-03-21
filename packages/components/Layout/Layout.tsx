import dynamic from 'next/dynamic'
import type { ILayout } from './Layout.types'

const Header = dynamic(() => import('@nextapp/header'))
const Footer = dynamic(() => import('@nextapp/footer'))

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
