import { type RFC } from '@app-types'
import { type IBox } from './Box.types'
import { classnames } from '@app-functions'

const Box: RFC<IBox> = ({ className = '', children }) => {
    const defaultClassName = ''

    return (
        <div className={classnames(defaultClassName, className)}>
            {children}
        </div>
    )
}

export default Box
