import { useLanguage, useRoute, useTheme } from '@haneulab/react-apis'
import { PrimaryLayout } from '@layouts/primary'
import { type PageWithLayout } from '@typeDefs'
import Link from 'next/link'

const AboutPage: PageWithLayout = () => {
    const { lang, onLanguageSwitch } = useLanguage()
    const { theme, onThemeSwitch } = useTheme()
    const { pathname, isRoute } = useRoute()

    return (
        <div>
            <div>About Page</div>
            <Link href={'/'}>
                <a>Home</a>
            </Link>
            <div>
                current - {pathname.current}
                <br />
                past - {pathname.previous}
            </div>
            <div>
                <div>
                    isCurrent Route About ?{' '}
                    {isRoute('/about').current ? 'yes' : 'no'}
                </div>
                <div>
                    isCurrent Route Home ? {isRoute('/').current ? 'yes' : 'no'}
                </div>
            </div>
        </div>
    )
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default AboutPage
