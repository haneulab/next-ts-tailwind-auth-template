import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const PrivatePage: PageWithLayout = () => {
    const { user } = useUser()

    return (
        <>
            <MetaLayout {...pageMeta('private', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3 className="text-xl font-bold lg:text-2xl">Private Page</h3>
                <p>This is PrivatePage : Private</p>
            </div>
        </>
    )
}

PrivatePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default PrivatePage
