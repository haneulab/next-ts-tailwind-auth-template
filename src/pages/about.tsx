import { useLanguage, useTheme } from '@haneulab/react-apis'
import PrimaryLayout from 'apps/layouts/primary/PrimaryLayout'
import { type PageWithLayout } from 'apps/types/declaration'

const AboutPage: PageWithLayout = () => {
    const { lang, onLanguageSwitch } = useLanguage()
    const { theme, onThemeSwitch } = useTheme()

    return <></>
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default AboutPage
