const classnames: (..._args: string[]) => string = (...args) =>
    args.filter(Boolean).join(' ')
export default classnames
