import { type LayoutRFC } from './types'

const Layout: LayoutRFC = ({ children }) => {
    return (
        <div>
            <div>Layout</div>
            {children}
        </div>
    )
}
export default Layout
