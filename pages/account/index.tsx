import dynamic from 'next/dynamic'
import { getSession, useSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'
import { NextPageWithLayout } from 'packages/components/App'
import { Session } from 'next-auth'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const AccountPage: NextPageWithLayout = ({ session }: { session: Session }) => {
    /*** CLIENT SIDE STATUS CHECKING */
    // const { data: session, status } = useSession({ required: false })

    // if (!session)
    //     return (
    //         <div className="flex flex-col items-center gap-y-2">
    //             <p>You are not signed in. Please sign in</p>
    //         </div>
    //     )

    // if (!session) return null

    return (
        <>
            <Meta />
            <div className="flex flex-col items-center gap-y-2">
                <picture className="w-full max-w-[50px] block rounde-full overflow-hidden">
                    <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="rounded-full"
                    />
                </picture>
                <p>
                    Account Page for <strong>{session.user.name}</strong>
                </p>
            </div>
        </>
    )
}

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    /** SERVER SIDE STATUS CHECK IN */
    const session = await getSession(context)

    if (!session)
        return {
            redirect: {
                destination: '/login',
                permenant: true,
            },
        }

    return {
        props: { session },
    }
}

AccountPage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default AccountPage
