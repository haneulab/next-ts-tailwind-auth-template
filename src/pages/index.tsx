import { type GetStaticProps, type PageWithLayout } from '@app-types'
import { PrimaryLayout } from '@app-components/layouts'

/** DATA PROPS INTERFACE */
/** PAGE DECLARATION */

interface StaticDataProps {
    name: string
    description: string
}

const HomePage: PageWithLayout<{
    pageDataLoaded: boolean
    pageData: StaticDataProps
}> = ({ pageData, pageDataLoaded }) => {
    return (
        <>
            {pageDataLoaded && pageData.description}
            {!pageDataLoaded && 'Something Is Wrong.'}
        </>
    )
}

/** GET STATIC PROPS */
/** EXPORT GET STATIC PROPS  */

const getStaticProps: GetStaticProps<StaticDataProps> = async (_ctx) => {
    return {
        props: {
            pageData: {
                name: 'Static Props',
                description: 'Hello Index!',
            },
            pageDataLoaded: true,
        },
    }
}
export { getStaticProps }

/** PAGE META OBJECT   */
/** PAGE GET LAYOUT SETUP */

const pageMeta = {
    title: 'HomePage',
    description: 'This is Homepage.',
    keywords: ['some', 'key', 'words'],
    image: 'public/image.png',
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout pageMeta={pageMeta}>{page}</PrimaryLayout>
}

/** PAGE EXPORTS */

export default HomePage
