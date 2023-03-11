import { type PageWithLayout } from '@app-types'
import { type GetServerSidePropsContext } from 'next'
import { PrimaryLayout } from '@app-components/layouts'
import { Box, BoxWrap, Switch, Text } from '@app-components/utils'
import { classnames } from '@app-functions'

const getServerSideProps = async (_: GetServerSidePropsContext) => {
    return { props: {} }
}

const HomePage: PageWithLayout = () => {
    return (
        <Box
            className={classnames(
                'h-screen flex flex-col justify-center items-center'
            )}
        >
            <BoxWrap className="px-8 py-24 lg:py-28 w-full max-w-cutoff mx-auto flex flex-col items-center gap-y-4">
                <Switch.Theme />
                <Switch.Language />
                <Text
                    variant="h1"
                    className="text-2xl md:text-3xl lg:text-4xl text-center font-bold"
                >
                    Hello World
                </Text>
                <Text variant="p">Nice To Meet You!</Text>
            </BoxWrap>
        </Box>
    )
}

const pageMeta = {
    title: 'HomePage',
    description: 'This is Homepage.',
    keywords: ['some', 'key', 'words'],
    image: 'public/image.png',
}

HomePage.getLayout = (page) => {
    return <PrimaryLayout pageMeta={pageMeta}>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default HomePage
