// PAGE IMPORTS
import PrimaryLayout from '@app/layouts/primary-layout'
import { Send } from '@pkg/next'
import { ExampleButton } from '@pkg/react'
import type { GetServerSidePropsContext } from 'next'
import type { PageWithLayout } from './pages'

// SSR
export const getServerSideProps = (_context: GetServerSidePropsContext) => {
    return { props: {} }
}

// PAGE
const HomePage: PageWithLayout = () => {
    return (
        <>
            <section>
                <h1>HomePage</h1>
                <Send
                    variant="blue"
                    as={`/post`}
                    label="See Post"
                    {...{ pathname: `/post`, query: { id: '1' } }}
                />
                <ExampleButton
                    variant="yellow"
                    label="click me"
                    onClick={() => alert('feautre not available.')}
                />
            </section>
        </>
    )
}

// PAGE LAYOUT
HomePage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

// PAGE EXPORT
export default HomePage
