import type { NextRouter } from 'next/router'

export type ClassNamesFunction = (..._args: string[]) => string

export type PathNamesFunction = (
    _router: NextRouter,
    ..._args: string[]
) => boolean
