import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const InternalServerErrorPage: PageWithLayout = () => {
    const { user } = useUser()

    return (
        <>
            <MetaLayout {...pageMeta('500', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen px-8 bg-neutral-800">
                <h3 className="mb-4 text-xl font-bold text-center text-red-500 lg:text-2xl">
                    Internal Server Error : 500
                </h3>
                <p className="px-2 py-2 text-sm font-light text-center bg-neutral-900 text-emerald-400">
                    If it is something that you did not expect, please report to
                    the admin.{' '}
                    <a href="#" className="font-bold underline">
                        Contact Admin
                    </a>
                </p>
            </div>
        </>
    )
}

InternalServerErrorPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default InternalServerErrorPage
