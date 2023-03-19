import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextjs-components/layout'))

const Home = () => {
    return (
        <div>
            <Layout>Children</Layout>
            <button
                type="button"
                onClick={() => {
                    throw new Error('Sentry Frontend Error')
                }}
            >
                Throw error
            </button>
        </div>
    )
}

export default Home
