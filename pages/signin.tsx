/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { type PageWithLayout } from '@typing'
import { MetaLayout, PrimaryLayout } from '@view/layouts'
import { pageMeta } from '@data/meta'
import { useUser } from '@view/hooks'

const SignInPage: PageWithLayout = () => {
    const router = useRouter()
    const { user } = useUser()

    useEffect(() => {
        if (user) {
            if (router.query.redirect) {
                router.push(router.query.redirect as string)
            } else {
                router.push('/')
            }
        }
    }, [user])

    return (
        !user && (
            <>
                <MetaLayout {...pageMeta('signin', user)} />
                <div className="flex flex-col items-center justify-center w-full h-screen bg-white">
                    <h3 className="text-xl font-bold lg:text-2xl">
                        SignInPage
                    </h3>
                    <p>
                        This is SignInPage : Public <strong>if no user</strong>
                    </p>
                    {router.query.redirect && (
                        <p>
                            You will be redirected to{' '}
                            <strong>{router.query.redirect}</strong> after
                            signing in.
                        </p>
                    )}
                </div>
            </>
        )
    )
}

SignInPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>
}

export default SignInPage
