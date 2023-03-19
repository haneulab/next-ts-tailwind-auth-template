import { type ILayout } from './types'
import dynamic from 'next/dynamic'

const Meta = dynamic(() => import('./Meta'))
const Header = dynamic(() => import('./Header'))
const Footer = dynamic(() => import('./Footer'))

const Layout = (props: ILayout) => {
    return (
        <>
            <Meta />
            <Header />
            {props.children ?? null}
            <Footer />
        </>
    )
}
export default Layout
