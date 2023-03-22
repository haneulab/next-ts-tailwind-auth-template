import { useSession, signIn } from 'next-auth/react'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const GoogleLoginButton = dynamic(() => import('@nextapp/GoogleLoginButton'))

const LoginPage = () => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) router.push('/')
    }, [session, router])
    return (
        <>
            <Meta />
            {!session && (
                <div>
                    <GoogleLoginButton signIn={() => signIn('google')} />
                </div>
            )}
        </>
    )
}

LoginPage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default LoginPage
