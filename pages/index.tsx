import type { NextPageWithLayout } from '@nextapp/app'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const Calendar = dynamic(() => import('@nextapp/Calendar'))
const ContactForm = dynamic(() => import('@nextapp/ContactForm'))

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <Meta />
            {/* <Calendar /> */}
            <ContactForm />
        </>
    )
}

HomePage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default HomePage
