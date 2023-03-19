import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextjs-components/layout'))

const Home = () => {
    return <div>Home</div>
}

Home.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default Home
