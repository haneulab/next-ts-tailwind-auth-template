export type ClassNames<T extends string> = (..._args: T[]) => T

export type ValidationType = 'text' | 'email' | 'phone' | 'dob'

export type Validation = (_info: {
    value: string
    maxLength?: number
    minLength?: number
}) => boolean
