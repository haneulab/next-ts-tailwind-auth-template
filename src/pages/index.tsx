import { useLanguage, useRoute, useTheme } from '@haneulab/react-apis'
import { PrimaryLayout } from '@layouts/primary'
import { type PageWithLayout } from '@typeDefs'
import Link from 'next/link'

const HomePage: PageWithLayout = () => {
    const { lang, onLanguageSwitch } = useLanguage()
    const { theme, onThemeSwitch } = useTheme()
    const { pathname, isRoute } = useRoute()

    return (
        <div>
            <div>Home Page</div>
            <Link href={'/about'}>
                <a>About</a>
            </Link>
            <div>
                current - {pathname.current}
                <br />
                past - {pathname.previous}
            </div>
            <div>
                isCurrent Route About ?{' '}
                {isRoute('/about').current ? 'yes' : 'no'}
            </div>
            <div>
                isCurrent Route Home ? {isRoute('/').current ? 'yes' : 'no'}
            </div>
        </div>
    )
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default HomePage
