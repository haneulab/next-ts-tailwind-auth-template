import type { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import dotenv from 'dotenv'

dotenv.config()

const nextAuthOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_AUTH_GOOGLE_CLIENT_SECRET,
        }),
    ],
}

export default NextAuth(nextAuthOption)
