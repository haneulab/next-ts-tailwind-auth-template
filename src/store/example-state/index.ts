import create from 'zustand'
import { persist } from 'zustand/middleware'

export type ExampleStateStore = {
    exampleState: boolean
    toggleState: () => void
}

export const useExampleStore = create(
    persist<ExampleStateStore>((set) => ({
        exampleState: false,
        toggleState: () =>
            set((state) => ({
                exampleState: !state.exampleState,
            })),
    }))
)
