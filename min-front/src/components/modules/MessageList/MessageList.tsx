import type React from "react";
import type { Message } from "../../shared/types";
import styles from "./MessageList.module.css"
import { MessageItem } from "../../core/MessageItem/MessageItem";

interface MessageListProps {
    messages: Message[] | undefined
    currentUserId: string
}

export const MessageList: React.FC<MessageListProps> = ({
    messages, 
    currentUserId
}) => {
    return (
        <div className={styles.container}>
            {messages?.slice().reverse().map((message) => {
                    const isOwn = message.senderId === currentUserId

                    return (
                        <MessageItem key={message.id} message={message} isOwn={isOwn} />
                    )
            })}
        </div>
    )
}