/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'
import { Sign } from '@fire/auth'
import { Connect, getUser } from '@fire/database'
import { auth } from '@fire/config/auth'
import { onAuthStateChanged } from 'firebase/auth'
import {
    type AuthContextProiderProps,
    type AuthContextProps,
    type RFC,
    type UserSchema,
} from '@typing'

const PRIVATE_ROUTES: Array<string> = [
    '/private',
    '/admin',
] /** PRIVATE ROUTES */
// const PUBLIC_ROUTES: Array<string> = ['/', '/public']  /** PUBLIC ROUTES */

const AuthContext = createContext<AuthContextProps>({
    user: null,
    sign: null,
    userId: null,
    isLoaded: true,
})

const AuthContextProvider: RFC<AuthContextProiderProps> = ({ children }) => {
    const router = useRouter()

    const [user_, setUser_] = useState<UserSchema>(null)
    const [userId_, setUserId_] = useState<string>(null)
    const [isLoaded, setisLoaded] = useState<boolean>(true)
    const [loadingStatus, setLoadingStatus] = useState<string>('')

    async function in_() {
        setisLoaded(false)
        setLoadingStatus('Signing You In...')
        await Sign.In()
            .then(async () => {
                setLoadingStatus('Getting Your Data...')
                const user = await getUser(auth.currentUser.uid)
                setUser_(user)
                setUserId_(user.id as string)
                Sign.Log(true, 'SignIn', 'Successfully signed in.')
                setLoadingStatus("You're Singed In!")
            })
            .catch((error) => {
                Sign.Log(false, 'SignIn', error.message)
                setLoadingStatus("You're Not Singed In!")
            })
        setisLoaded(true)
    }

    async function out_() {
        setisLoaded(false)
        setLoadingStatus('Singing You Out...')
        await Sign.Out()
            .then(() => {
                setUser_(null)
                setUserId_(null)
                Sign.Log(true, 'SignOut', 'Successfully signed out.')
                setLoadingStatus("You're Signed Out!")
            })
            .catch((error) => {
                Sign.Log(false, 'SignOut', error.message)
                setLoadingStatus("You're Not Signed Out!")
            })
        setisLoaded(true)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async function (currentUser) {
            setisLoaded(false)
            setLoadingStatus('Getting Your Data...')
            if (!currentUser) {
                setUser_(null)
                setUserId_(null)
                setisLoaded(true)
                return
            }

            await Connect.User.Get(currentUser.uid)
                .then((user) => {
                    setUser_(user as UserSchema)
                    setUserId_(user.id as string)
                    Connect.User.Log(
                        true,
                        'Get',
                        'Successfully retrieved user data.'
                    )
                    setLoadingStatus('Getting Your Data Completed!')
                })
                .catch((error) => {
                    Connect.User.Log(false, 'Get', error.message)
                    setLoadingStatus('Something Went Wrong Getting Your Data!')
                })

            setisLoaded(true)
        })
    }, [])

    useEffect(() => {
        setisLoaded(false)
        if (user_) {
            /** IF USER */
            if (router.pathname.includes('signin')) {
                /** IF CURRENTLY : SignInPage */
                if (router.query.redirect) {
                    /** IF REDIRECT EXIST */
                    if (router.query.redirect === '/admin') {
                        /** IF REDIRECT TO ADMIN */

                        router.push(
                            {
                                pathname: '/admin',
                                query: {
                                    uid: user_.id,
                                    email: user_.email,
                                },
                            },
                            '/admin'
                        )
                    } else {
                        /** IF REDIRECT TO OTHER PLACES */
                        router.push(router.query.redirect as string)
                    }
                } else {
                    /** IF REDIRECT DOES NOT EXIST */
                    router.push('/')
                }
            }
        } else {
            /** IF NO USER */
            if (PRIVATE_ROUTES.includes(router.pathname)) {
                /** IF IN PRIVATE ROUTE */
                router.push({
                    pathname: '/signin',
                    query: {
                        redirect: router.route,
                    },
                })
            }
        }
        setisLoaded(true)
    }, [user_])

    useEffect(() => {
        if (isLoaded) {
            setLoadingStatus('')
        }
    }, [isLoaded])

    useEffect(() => {
        /** IF NO USER */
        if (!user_) {
            if (PRIVATE_ROUTES.includes(router.pathname)) {
                /** IF IN PRIVATE ROUTE */
                setLoadingStatus('Redirecting You...')
                router.push({
                    pathname: '/signin',
                    query: {
                        redirect: router.route,
                    },
                })
            }
        }
    }, [router])

    return (
        <AuthContext.Provider
            value={{
                user: user_,
                userId: userId_,
                sign: { in: in_, out: out_ },
                isLoaded,
            }}
        >
            {isLoaded ? (
                children
            ) : (
                <div className="fixed top-0 left-0 z-30 flex flex-col items-center justify-center w-full h-screen bg-white text-neutral-900">
                    <div className="flex items-center justify-center w-16 h-16 p-1.5 mx-auto rounded-full bg-gradient-to-r from-sky-200 via-teal-300 to-blue-400 animate-spin relative">
                        <span className="absolute bottom-0 w-2 h-2 bg-white" />
                        <span className="absolute top-0 w-2 h-2 bg-white" />
                        <div className="w-[95%] h-[95%] rounded-full bg-white" />
                    </div>
                    {loadingStatus && (
                        <p className="px-8 mt-4 text-base font-medium text-center font-head-main lg:text-lg text-slate-600">
                            {loadingStatus}
                        </p>
                    )}
                </div>
            )}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }
