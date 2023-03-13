import { GetServerSidePropsContext } from 'next'
import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { query } = ctx

    return {
        props: {
            id: query.id ? (query.id as string) : '',
        },
    }
}

const MenuDetailPage: PageWithLayout<{ id: string }> = ({ id }) => {
    const { user } = useUser()

    return (
        <>
            <MetaLayout {...pageMeta('menu', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3>MenuDetailPage</h3>
                <p>{id}</p>
            </div>
        </>
    )
}

MenuDetailPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default MenuDetailPage
