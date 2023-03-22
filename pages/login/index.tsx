import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const LoginPage = () => {
    return (
        <>
            <Meta />
        </>
    )
}

LoginPage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default LoginPage
