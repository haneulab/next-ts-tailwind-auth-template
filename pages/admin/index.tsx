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
    const { query } = ctx

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

    // const [refresh, setRefresh] = useState<boolean>(false)

    // useEffect(() => {
    //     setRefresh(typeof verified === 'boolean' && typeof message === 'string')
    // }, [verified, message])

    useEffect(() => {
        if (user) {
            router.replace(
                {
                    pathname: router.pathname,
                    query: {
                        uid: user.id,
                        email: user.email,
                    },
                },
                '/admin'
            )
        } else {
            router.push({
                pathname: '/signin',
                query: {
                    redirect: '/admin',
                },
            })
        }
    }, [])

    return (
        <>
            <MetaLayout {...pageMeta('admin', user)} />
            {verified ? (
                <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                    <h3>AdminPage</h3>
                    <p>You are the admin!</p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                    <h3>AdminPage</h3>
                    <p>{message}</p>
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
