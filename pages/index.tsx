import type { NextPageWithLayout } from '@nextapp/app'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <Meta />
            HomePage
        </>
    )
}

HomePage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default HomePage
