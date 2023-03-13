import { Sign } from 'backend/auth'
import { auth } from 'backend/config/auth'
import { onAuthStateChanged, User } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import {
    AuthContextProiderProps,
    AuthContextProps,
    RFC,
    UserSchema,
} from 'typing'
import { useRouter } from 'next/router'
import { Connect } from 'backend/database'

const AuthContext = createContext<AuthContextProps>({
    user: null,
    sign: null,
    userId: null,
})

const AuthContextProvider: RFC<AuthContextProiderProps> = ({ children }) => {
    const router = useRouter()

    const [user_, setUser_] = useState<UserSchema>(null)
    const [userId_, setUserId_] = useState<string>(null)
    const [isLoaded, setisLoaded] = useState<boolean>(true)

    async function in_() {
        setisLoaded(false)
        await Sign.In(
            async (result) => {
                await Connect.User.Get(
                    result.user.uid,
                    (user) => {
                        setUser_(user)
                        setUserId_(user.id as string)
                    },
                    (error) => console.error(error)
                )
                if (router.pathname === '/') {
                    router.replace('/')
                } else {
                    if (router.query.redirect) {
                        router.push(router.query.redirect as string)
                    } else {
                        router.push('/')
                    }
                }
            },
            (error) => console.error(error)
        )
        setisLoaded(true)
    }

    async function out_() {
        setisLoaded(false)
        await Sign.Out(
            async () => {
                setUser_(null)
                setUserId_(null)
                if (router.pathname === '/') {
                    router.replace('/')
                } else {
                    router.push({
                        pathname: '/signin',
                        query: {
                            redirect: router.pathname,
                        },
                    })
                }
            },
            (error) => console.error(error)
        )
        setisLoaded(true)
    }

    useEffect(() => {
        onAuthStateChanged(auth, async function (currentUser) {
            setisLoaded(false)

            if (!currentUser) {
                setUser_(null)
                setUserId_(null)

                if (router.pathname !== '/') {
                    await router.push({
                        pathname: '/signin',
                        query: {
                            redirect:
                                router.pathname === '/signin'
                                    ? '/'
                                    : router.pathname,
                        },
                    })
                }

                setisLoaded(true)
                return
            }

            await Connect.User.Get(
                currentUser.uid,
                (user) => {
                    setUser_(user)
                    setUserId_(user.id as string)
                },
                (error) => console.error(error)
            )

            setisLoaded(true)
        })
    }, [])

    useEffect(() => {
        if (router.pathname.includes('/signin') && user_) router.push('/')
    }, [router, user_])

    const protectedRoutes = ['/about']

    return (
        <AuthContext.Provider
            value={{
                user: user_,
                userId: userId_,
                sign: { in: in_, out: out_ },
            }}
        >
            {isLoaded
                ? protectedRoutes.includes(router.pathname)
                    ? user_
                        ? children
                        : null
                    : children
                : null}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }
