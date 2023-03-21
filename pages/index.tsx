import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextapp/layout'))
const Meta = dynamic(() => import('@nextapp/meta'))

const Home = () => {
    return (
        <>
            <Meta />
            <div>Home</div>
        </>
    )
}

Home.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default Home
