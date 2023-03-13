import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const MenuPage: PageWithLayout = () => {
    const { user } = useUser()

    return (
        <>
            <MetaLayout {...pageMeta('menu', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3>MenuPage</h3>
            </div>
        </>
    )
}

MenuPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default MenuPage
