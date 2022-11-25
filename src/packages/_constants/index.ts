const __ColorVariants__ = ['blue', 'red', 'yellow'] as const
export type ColorVariant = typeof __ColorVariants__[number]
