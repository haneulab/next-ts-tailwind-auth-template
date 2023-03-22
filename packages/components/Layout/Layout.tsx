import dynamic from 'next/dynamic'
import type { ILayout } from './Layout.types'

const Header = dynamic(() => import('@nextapp/Header'))
const Footer = dynamic(() => import('@nextapp/Footer'))

const Layout = (props: ILayout) => {
    return (
        <>
            <div className="relative flex flex-col justify-between w-full h-screen">
                <Header />
                {props.children}
                <Footer />
            </div>
        </>
    )
}

export default Layout
