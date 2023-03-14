import { type RFC } from '@typing'
import { classnames } from '@view/functions'
import { useLanguage, useUser } from '@view/hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HeaderLayout: RFC = () => {
    const { lang } = useLanguage()
    const { sign, user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (user) {
            router.replace(router.asPath)
        }
    }, [])

    return (
        <header
            className={classnames(
                'fixed top-0 left-0 flex items-center justify-between w-full px-8 py-4 mx-auto lg:px-20 2xl:px-40',
                user ? 'bg-neutral-800 text-white' : 'bg-white text-neutral-800'
            )}
        >
            <div className="flex items-center gap-x-4">
                <h1 className="text-lg font-bold lg:text-xl font-head-main">
                    <Link href={'/'}>
                        <a>My App</a>
                    </Link>
                </h1>
                <button
                    onClick={user ? sign.out : sign.in}
                    className="px-4 py-2 text-sm font-medium border font-para-main"
                >
                    {user ? 'Sign Out' : 'Sign In'}
                </button>
                {user && <p className="font-para-sub">Hello, {user.name}</p>}
            </div>

            <nav className="flex items-center gap-x-4">
                {!user && (
                    <Link href={'/signin'}>
                        <a>SignIn</a>
                    </Link>
                )}
                <Link href={'/private'}>
                    <a>Private</a>
                </Link>
                <Link href={'/public'}>
                    <a>Public</a>
                </Link>
                {user && user.isAdmin && (
                    <Link
                        href={{
                            pathname: '/admin',
                            query: { uid: user.id, email: user.email },
                        }}
                        as="/admin"
                    >
                        <a>Admin</a>
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default HeaderLayout
