import type React from "react";
import { AvatarImage } from "../../core/AvatarImage/AvatarImage";
import styles from "./DialogCard.module.css"
import type { Conversation, Message } from "../../shared/types";
import { useChatStore } from "../../../store/useChatStore";
import { useShallow } from "zustand/shallow";

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
    currentUserId,
}) => {

    const {getLastMessage} = useChatStore(useShallow( state => ({
        getLastMessage: state.getLastMessage})
    ))

    const lastMessage = getLastMessage(conversation.id)
    const isLastMessageOwn = lastMessage?.senderId === currentUserId

    return (
        <div 
            className={`${styles.dialog_wrapper} ${isActive ? styles.active : ''}`}
            onClick={onClick}
        >
            <AvatarImage 
                size="medium" 
                src={`${conversation.participants[1].avatar}`} 
            />
            <div className={`${styles.info}`}>
                <h3 className={`${styles.name}`}>{conversation.participants[1].name}</h3>
                <p className={`${styles.last_msg}`}>{isLastMessageOwn ? 'you: ' : ''}{lastMessage?.text}</p>
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