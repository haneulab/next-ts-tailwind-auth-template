import React from 'react'

type _CoreComponent<ComponentPropInterface extends {} = {}> =
    React.FC<ComponentPropInterface>

export type ExampleComponent = _CoreComponent<{
    name: string
    description: string
    variant: 'primary' | 'secondary'
}>
