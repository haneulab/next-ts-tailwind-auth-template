/**
 * type imports
 */
import type { MessageBarComponent } from '@typeDefs/components/shared'

const MessageBar: MessageBarComponent = ({ message }) => {
    return <p>{message ?? 'Hello World!'}</p>
}

export default MessageBar
