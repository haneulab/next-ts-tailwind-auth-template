type ClassNames = (..._classnames: string[]) => string
const __classnames__: ClassNames = (...classnames) =>
    classnames.filter(Boolean).join(' ')
export default __classnames__
