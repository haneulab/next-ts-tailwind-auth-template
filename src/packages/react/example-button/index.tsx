import { classnames } from '@pkg/utils'
import type { ColorVariant } from '@pkg/_constants'

interface IExampleButton {
    variant: ColorVariant
    label: string
    onClick: () => void
}

const ExampleButton: React.FC<IExampleButton> = ({
    variant = 'blue',
    label,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            className={classnames(
                'transition-smooth px-8 py-3 rounded-md hover:opacity-70',
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
        </button>
    )
}

export default ExampleButton
