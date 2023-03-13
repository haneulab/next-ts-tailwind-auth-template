import { type RFC } from '@typing'
import { useLanguage, useUser } from '@view/hooks'
import { Switch } from '@view/utils'
import Link from 'next/link'

const HeaderLayout: RFC = () => {
    const { lang } = useLanguage()
    const { sign, user } = useUser()

    return (
        <header className="fixed top-0 z-40 w-full px-8 backdrop-blur-sm">
            <section className="flex flex-col items-center">
                <h1 className="block px-8 pt-6 mx-auto mb-2 w-max">
                    <Link href={'/'}>
                        <a className="font-bold font-para[ko]-batang text-2xl md:text-3xl lg:text-4xl">
                            {lang === 'en' ? 'BanchanBox' : '반찬박스'}
                        </a>
                    </Link>
                </h1>
                <ul className="flex items-center px-8 py-4 text-white rounded-lg bg-sky-400 gap-x-4 drop-shadow-md font-head[en]-inter font-medium">
                    <Switch.Language />
                    {!user && (
                        <button
                            className="transition-smooth lg:hover:opacity-60"
                            onClick={sign.in}
                        >
                            {lang === 'en' ? 'Sign In' : '로그인'}
                        </button>
                    )}
                    {user && (
                        <button
                            className="transition-smooth lg:hover:opacity-60"
                            onClick={sign.out}
                        >
                            {lang === 'en' ? 'Sign Out' : '로그아웃'}
                        </button>
                    )}
                    {user && user.isAdmin && (
                        <Link
                            href={{
                                pathname: '/admin',
                                query: {
                                    uid: user.id,
                                    email: user.email,
                                },
                            }}
                            as={'/admin'}
                        >
                            <a className="transition-smooth lg:hover:opacity-60">
                                {lang === 'en' ? 'Manage' : '관리'}
                            </a>
                        </Link>
                    )}
                </ul>
            </section>
        </header>
    )
}

export default HeaderLayout
