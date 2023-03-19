import dynamic from 'next/dynamic'

const Head = dynamic(() => import('next/head'))

const Meta = () => {
    return (
        <Head>
            <meta />
            <title>App</title>
        </Head>
    )
}

export default Meta
