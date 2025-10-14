import type React from "react";
import { AvatarImage } from "../../core/AvatarImage/AvatarImage";
import styles from './ChatHeader.module.css'
import type { Conversation } from "../../shared/types";

interface ChatHeaderProps {
    companion: Conversation
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
    companion
}) => {
    return (
        <header className={styles.header}>
            <div></div>
            <div className={styles.info}>
                <div className={styles.name}>{companion.user.name}</div>
                <div className={styles.status}>{companion.user.online ? 'online' : 'offline'}</div>
            </div>
            <AvatarImage src={companion.user.avatar} size="small" />
        </header>
    )
}