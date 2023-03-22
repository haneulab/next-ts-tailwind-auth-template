import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import dotenv from 'dotenv'

dotenv.config()

const nextAuthOption = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET,
        }),
    ],

    secret: process.env.NEXTAUTH_JWT_SECRET,
}

export default NextAuth(nextAuthOption)
