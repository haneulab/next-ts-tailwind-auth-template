import { MetaLayout, PrimaryLayout } from 'frontend/layouts'
import { useUser } from 'frontend/hooks'

import { type GetStaticProps, type PageWithLayout } from 'typing'
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
    const { user } = useUser()

    return (
        <>
            <MetaLayout
                title={user ? `Welcome ${user.name} | My App` : 'Home | My App'}
                description="This app integrates NextJs, TypeScript, TailwindCSS, and Firebase."
                keywords={['NextJs', 'TypeScript', 'TailwindCSS', 'Firebase']}
            />
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

/** PAGE GET LAYOUT SETUP */

HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

/** PAGE EXPORTS */

export default HomePage
