import { useState } from "react"
import styles from './MessageInput.module.css'

interface MessageInputProps {
    onSendMessage: (text: string) => void
}

export const MessageInput: React.FC<MessageInputProps> = ({onSendMessage}) => {
    const [message, setMessage] = useState('')
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (message.trim()) {
            onSendMessage(message.trim())
            setMessage('')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit(e)
        }
    }

    return (
        <form className={styles.container}>
            <input  
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyUp={handleKeyPress}
                placeholder="input message..."
                className={styles.textarea}
            />
            <button type="submit" onClick={handleSubmit}></button>
        </form>
    )
}