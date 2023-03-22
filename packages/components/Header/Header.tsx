import dynamic from 'next/dynamic'
import type { IHeader } from './Header.types'

const GoogleLoginButton = dynamic(() => import('@nextapp/GoogleLoginButton'))

const Header = (props: IHeader) => {
    return (
        <header className="flex items-center justify-between w-full p-8 border-b">
            <h1 className="font-bold">NextAuth</h1>
            <GoogleLoginButton />
        </header>
    )
}

export default Header
