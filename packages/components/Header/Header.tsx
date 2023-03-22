import dynamic from 'next/dynamic'
import type { IHeader } from './Header.types'
import { useSession, signOut } from 'next-auth/react'

const Link = dynamic(() => import('next/link'))
const Header = (props: IHeader) => {
    const { data: session } = useSession()

    return (
        <header className="flex items-center justify-between w-full p-8 border-b">
            <h1 className="font-bold">NextAuth</h1>
            {!session && <Link href={'/login'}>Login</Link>}
            {session && (
                <div className="flex items-center gap-x-4">
                    <p> Hello! {session.user.name}</p>
                    <button onClick={() => signOut()}>Logout</button>
                    <Link href={'/account'}>My Account</Link>
                </div>
            )}
        </header>
    )
}

export default Header
