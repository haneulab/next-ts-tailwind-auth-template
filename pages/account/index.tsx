import dynamic from 'next/dynamic'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const AccountPage = () => {
    return (
        <>
            <Meta />
            <div className="flex flex-col items-center gap-y-2">
                {/* <picture className="w-full max-w-[50px] block rounde-full overflow-hidden">
                    <img
                        src={session.user.image}
                        alt={session.user.name}
                        className="rounded-full"
                    />
                </picture>
                <p>
                    Account Page for <strong>{session.user.name}</strong>
                </p> */}
            </div>
        </>
    )
}

// export const getServerSideProps = async (
//     context: GetServerSidePropsContext
// ) => {
//     /** SERVER SIDE STATUS CHECK IN */
//     const session = await getSession(context)

//     if (!session)
//         return {
//             redirect: {
//                 destination: '/login',
//                 permenant: true,
//             },
//         }

//     return {
//         props: { session },
//     }
// }

AccountPage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default AccountPage
