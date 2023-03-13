import { type RFC, type IMetaLayout } from '@typing'
import Head from 'next/head'

const MetaLayout: RFC<IMetaLayout> = ({
    title,
    description,
    keywords,
    image,
}) => {
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="twitter:card" content={description} />
            <meta name="twitter:site" content="@haneulab" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

export default MetaLayout
