import { type RFC } from 'apps/types/declaration'
import { type IMetaLayout } from './MetaLayout.types'
import { metaLayoutMock } from './MetaLayout.mock'
import Head from 'next/head'

const MetaLayout: RFC<IMetaLayout> = ({ title, description, keywords }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="keywords"
                content={
                    keywords
                        ? keywords.join(', ')
                        : metaLayoutMock.keywords.join(', ')
                }
            />
            <meta
                name="og:description"
                content={description ? description : metaLayoutMock.description}
            />
            <meta
                name="og:title"
                content={title ? title : metaLayoutMock.title}
            />
            <meta
                name="description"
                content={description ? description : metaLayoutMock.description}
            />
            <title>{title ? title : metaLayoutMock.title}</title>
        </Head>
    )
}

export default MetaLayout
