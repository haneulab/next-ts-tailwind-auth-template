import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const AboutPage: PageWithLayout = () => {
    const { user } = useUser()

    return (
        <>
            <MetaLayout {...pageMeta('about', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3>AboutPage</h3>
            </div>
        </>
    )
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default AboutPage
