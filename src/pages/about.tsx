import { type PageWithLayout } from '@app-types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@app-components/layouts'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const AboutPage: PageWithLayout = () => {
    return <>AboutPage</>
}

const pageMeta = {
    title: '',
    description: '',
    keywords: [''],
    image: '',
}

AboutPage.getLayout = (page) => {
    return <PrimaryLayout pageMeta={pageMeta}>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default AboutPage
