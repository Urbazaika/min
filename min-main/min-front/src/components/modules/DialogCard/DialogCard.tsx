import type React from "react";
import { AvatarImage } from "../../core/AvatarImage/AvatarImage";
import styles from "./DialogCard.module.css"
import type { Conversation } from "../../shared/types";

interface DialogCardProps {
    conversation: Conversation
    isActive?: boolean
    onClick: () => void
    currentUserId: string
}

export const DialogCard: React.FC<DialogCardProps> = ({
    conversation,
    isActive = false,
    onClick,
    currentUserId
}) => {
    const isLastMessageOwn = conversation.lastMessage.senderId === currentUserId

    return (
        <div 
            className={`${styles.dialog_wrapper} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <AvatarImage 
                size="medium" 
                src={`${conversation.user.avatar}`} 
            />
            <div className={`${styles.info}`}>
                <h3 className={`${styles.name}`}>{conversation.user.name}</h3>
                <p className={`${styles.last_msg}`}>{isLastMessageOwn ? 'you: ' : ''}{conversation.lastMessage.text}</p>
            </div>
            {
                conversation.unreadCount > 0 
                ?
                <div className={`${styles.unreadCount}`}>{conversation.unreadCount}</div>
                :
                ''
            }
        </div>
    )
}