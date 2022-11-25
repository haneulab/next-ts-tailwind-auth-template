import Link from 'next/link'
import { classnames } from '@pkg/utils'
import type { ColorVariant } from '@pkg/_constants'

interface ISend {
    variant: ColorVariant
    label: string
    className?: string
    pathname: string
    query?: any
    as?: string
}
const Send: React.FC<ISend> = (props) => {
    const { className, variant = 'blue', label, as, ...url } = props

    return (
        <Link href={url} as={as}>
            <a
                className={classnames(
                    'transition-smooth px-8 py-3',
                    className,
                    variant === 'blue'
                        ? 'bg-blue-500 text-white'
                        : variant === 'yellow'
                        ? 'bg-amber-500 text-white'
                        : variant === 'red'
                        ? 'bg-rose-500 text-white'
                        : ''
                )}
            >
                {label}
            </a>
        </Link>
    )
}

export default Send
