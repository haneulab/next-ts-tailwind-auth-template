import NextAuth from 'next-auth/next'
import type { NextAuthOptions } from 'next-auth'
import { NextApiHandler } from 'next'

const options: NextAuthOptions = {
    providers: [],
    pages: {},
}

const nextAuthHandler: NextApiHandler = (req, res) =>
    NextAuth(req, res, options)

export default nextAuthHandler
