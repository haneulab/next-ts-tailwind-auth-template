/* eslint-disable react-hooks/exhaustive-deps */
import { type GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { useUser } from '@view/hooks'
import { pageMeta } from '@data/meta'

interface ServerDataProps {
    verified: boolean
    message: string
}

const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { query, res } = ctx

    const { uid, email } = query as {
        uid: string | null
        email: string | null
    }

    const apiRoute = [
        process.env.NODE_ENV === 'development'
            ? process.env.DOMAIN_DEVELOPMENT
            : process.env.DOMAIN_PRODUCTION,
        'api/admin',
    ].join('/')

    const apiBody = JSON.stringify({
        uid,
        email,
    })

    try {
        const res = await fetch(apiRoute, {
            method: 'POST',
            body: apiBody,
        })

        if (res.ok) {
            return {
                props: {
                    verified: true,
                    message: '',
                },
            }
        }

        return {
            props: {
                verified: false,
                message: 'Server does not access you a grant to this page.',
            },
        }
    } catch (error) {
        return {
            props: {
                verified: false,
                message: 'Server does not access you a grant to this page.',
            },
        }
    }
}

const AdminPage: PageWithLayout<ServerDataProps> = ({ verified, message }) => {
    const router = useRouter()
    const { user } = useUser()

    /** UID, EMAIL REVALIDATE ON BROWSER REFRESH */
    useEffect(() => {
        if (user) {
            router.replace(
                {
                    pathname: router.asPath,
                    query: {
                        uid: user.id,
                        email: user.email,
                    },
                },
                '/admin'
            )
        }
    }, [])

    return (
        <>
            <MetaLayout {...pageMeta('admin', user)} />
            {verified ? (
                <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                    <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                        <h3 className="text-xl font-bold lg:text-2xl">
                            AdminPage
                        </h3>
                        <p>This is AdminPage : Public</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                    <h3 className="text-xl font-bold lg:text-2xl">AdminPage</h3>
                    <p>This is AdminPage : Public</p>
                    <p>
                        Message From Server : <strong>{message}</strong>
                    </p>
                </div>
            )}
        </>
    )
}

AdminPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export { getServerSideProps }
export default AdminPage
