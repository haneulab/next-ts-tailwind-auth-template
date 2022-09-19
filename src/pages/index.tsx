/**
 * type imports
 */
import type { PageWithLayout } from '@typeDefs/pages'

/**
 * component imports
 */
import PrimaryLayout from '@layout-components/PrimaryLayout'
import Example from '@core-components/Example'

const Home: PageWithLayout = () => {
    return (
        <section className="w-full">
            <div className="w-full max-w-cutoff px-8 py-24 mx-auto">
                <Example
                    name="NextJS, TypeScript, and TailwindCSS Template"
                    description="Welcome to Landing Page"
                    variant="primary"
                />
            </div>
        </section>
    )
}

Home.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
