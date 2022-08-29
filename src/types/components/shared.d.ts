import React from 'react'

export interface IMessageBar {
    message?: string
}

export type MessageBarComponent = React.FC<IMessageBar>
