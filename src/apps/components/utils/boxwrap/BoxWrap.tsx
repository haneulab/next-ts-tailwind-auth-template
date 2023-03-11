import { type RFC } from '@app-types'
import { type IBoxWrap } from './BoxWrap.types'
import { classnames } from '@app-functions'

const BoxWrap: RFC<IBoxWrap> = ({ children, className = '' }) => {
    const defaultClassName = ''

    return (
        <section className={classnames(defaultClassName, className)}>
            {children}
        </section>
    )
}

export default BoxWrap
