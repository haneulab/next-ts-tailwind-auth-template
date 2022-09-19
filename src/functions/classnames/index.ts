import type { ClassNamesFunction } from '@typeDefs/functions'

const classnames: ClassNamesFunction = (...args) =>
    args.filter(Boolean).join(' ')

export default classnames
