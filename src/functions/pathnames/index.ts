import type { PathNamesFunction } from '@typeDefs/functions'

const pathnames: PathNamesFunction = (router, ...args) =>
    args.includes(router.pathname)

export default pathnames
