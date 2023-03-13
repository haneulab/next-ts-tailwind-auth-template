/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

const OrderPage: PageWithLayout = () => {
    const router = useRouter()
    const { user } = useUser()

    useEffect(() => {
        if (!user) {
            router.push({
                pathname: '/signin',
                query: {
                    redirect: '/order',
                },
            })
        }
    }, [])

    return (
        <>
            <MetaLayout {...pageMeta('order', user)} />
            <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                <h3>OrderPage</h3>
            </div>
        </>
    )
}

OrderPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default OrderPage
