import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const PublicPage: PageWithLayout = () => {
    const { user } = useUser()

    return (
        <>
            <MetaLayout {...pageMeta('public', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3 className="text-xl font-bold lg:text-2xl">Public Page</h3>
                <p>This is PublicPage : Public</p>
            </div>
        </>
    )
}

PublicPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default PublicPage
