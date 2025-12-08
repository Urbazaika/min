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
                <div className={styles.name}>{companion.participants[1].name}</div>
                <div className={styles.status}>{companion.participants[1].status}</div>
            </div>
            <AvatarImage src={companion.participants[1].avatar} size="medium" />
        </header>
    )
}