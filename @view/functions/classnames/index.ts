import { type ClassNames } from '@typing'

const classnames: ClassNames<string> = (...args) =>
    args.filter(Boolean).join(' ')

export default classnames
