/**
 * type imports
 */
import type { PageWithLayout } from '@typeDefs/pages'
/**
 * constant imports
 */
import { MESSAGE } from '@constants'
/**
 * component imports
 */
import PrimaryLayout from '@components/layouts/PrimaryLayout'
import MessageBar from '@components/shared/bars/MessageBar'

const About: PageWithLayout = () => {
    return (
        <div>
            <MessageBar message={MESSAGE} />
        </div>
    )
}

About.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default About
