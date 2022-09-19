import type { ExampleComponent } from '@typeDefs/components/core'

const Example: ExampleComponent = ({ name, variant, description }) => {
    return (
        <div className="flex flex-col space-y-4">
            {variant === 'primary' && (
                <>
                    <h1 className="text-3xl font-bold">{name}</h1>
                    <h3 className="text-xl font-medium">{description}</h3>
                </>
            )}
            {variant === 'secondary' && (
                <>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <h4 className="text-lg font-medium">{description}</h4>
                </>
            )}
            <p className="w-full md:max-w-md text-gray-500 italic pt-4 border-t border-gray-300/50">
                Template Created By{' '}
                <a
                    className="text-blue-500 font-light transition-all hover:opacity-75"
                    href="https://github.com/haneulab"
                >
                    HaneuLab
                </a>
            </p>
        </div>
    )
}

export default Example
