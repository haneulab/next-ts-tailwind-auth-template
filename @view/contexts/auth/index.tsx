import { Sign } from '@fire/auth'
import { Connect } from '@fire/database'
import { auth } from '@fire/config/auth'
import { onAuthStateChanged } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import {
    AuthContextProiderProps,
    AuthContextProps,
    RFC,
    UserSchema,
} from '@typing'
import { useRouter } from 'next/router'

const AuthContext = createContext<AuthContextProps>({
    user: null,
    sign: null,
    userId: null,
})

// const protectedRoutes = ['/about', '/order', '/_admin']
// const publicRoutes = ['/', '/menu', `/menu/*`]

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

    return (
        <AuthContext.Provider
            value={{
                user: user_,
                userId: userId_,
                sign: { in: in_, out: out_ },
            }}
        >
            {isLoaded ? children : null}
        </AuthContext.Provider>
    )
}

export { AuthContextProvider, AuthContext }
