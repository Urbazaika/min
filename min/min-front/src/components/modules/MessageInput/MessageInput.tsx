import { useState } from "react"
import styles from './MessageInput.module.css'

export const MessageInput = () => {
    const [message, setMessage] = useState('')
    
    return (
        <form className={styles.container}>
            <input  
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="input message..."
                className={styles.textarea}
            />
            <button></button>
        </form>
    )
}