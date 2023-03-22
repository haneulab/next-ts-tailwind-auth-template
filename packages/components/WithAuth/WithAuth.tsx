import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useSession, signIn } from 'next-auth/react'
import type { IWithAuth } from './WithAuth.types'

const AuthLoadingSpinner = dynamic(() => import('@nextapp/AuthLoadingSpinner'))
const LoginForm = dynamic(() => import('@nextapp/LoginForm'), {
    loading: () => <p>Loading...</p>,
})

const WithAuth = (props: IWithAuth) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    const signInWithProvider = async (
        provider: 'google' | 'facebook' | 'twitter'
    ) => {
        await signIn(provider)
    }

    if (typeof window !== 'undefined' && status === 'loading')
        return (
            <AuthLoadingSpinner isLoaded={status !== 'loading'} message={''} />
        )

    if (
        typeof window !== 'undefined' &&
        !session &&
        router.pathname !== '/login'
    )
        return (
            <LoginForm
                googleSignIn={() => signInWithProvider('google')}
                facebookSignIn={() => signInWithProvider('facebook')}
                twitterSignIn={() => signInWithProvider('twitter')}
                message="To view this page, you need to login."
            />
        )

    if (typeof window === 'undefined') return <></>

    if (session && router.pathname === '/login') {
        router.push('/')
    }

    return (
        <>
            {router.pathname === '/login' ? (
                <LoginForm
                    googleSignIn={() => signInWithProvider('google')}
                    facebookSignIn={() => signInWithProvider('facebook')}
                    twitterSignIn={() => signInWithProvider('twitter')}
                    message="Please login with the following options."
                />
            ) : (
                <>{props.children}</>
            )}
        </>
    )
}

export default WithAuth
