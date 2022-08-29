import { MetaLayoutComponent } from '@typeDefs/components/layouts'
import Head from 'next/head'

const MetaLayout: MetaLayoutComponent = ({ title, description, keywords }) => {
    return (
        <Head>
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

export default MetaLayout
