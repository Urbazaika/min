import type { Message } from "../../shared/types"
import styles from "./MessageItem.module.css"

interface MessageItemProps {
    message: Message
    isOwn: boolean
}

export const MessageItem: React.FC<MessageItemProps> = ({
    message,
    isOwn
}) => {
    return (
        <div className={`${styles.container} ${isOwn ? styles.own : ''}`}>
            <div className={styles.messageContent}>
                <div className={styles.text}>{message.text}</div>
            </div>
        </div>
    )
}