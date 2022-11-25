import { defaultMetaOption } from '@app/_constants'
import Head from 'next/head'
import type { UI } from '@app/types/components'

interface IMetaLayout {
    title?: string
    description?: string
    keywords?: string[]
}

const MetaLayout: UI<IMetaLayout> = (props = defaultMetaOption) => {
    return (
        <Head>
            <meta name="keywords" content={props.keywords.join(', ')} />
            <meta name="description" content={props.description} />
            <title>{props.title}</title>
        </Head>
    )
}

export default MetaLayout
