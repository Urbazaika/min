import type React from "react";
import { MessageInput } from "../../modules/MessageInput/MessageInput";
import { ChatHeader } from "../../modules/ChatHeader/ChatHeader";
import type { Conversation, Message } from "../../shared/types";
import styles from './Chat.module.css'
import { MessageList } from "../../modules/MessageList/MessageList";

interface ChatProps {
    conversation: Conversation
    messages: Message[]
    currentUserId: string
    onSendMessage: (text: string) => void 
}

export const Chat: React.FC<ChatProps> = ({conversation, messages, currentUserId, onSendMessage}) => {
    return (
        <div className={styles.container}>
            <ChatHeader companion={conversation} />
            <div className={styles.messagesContainer}>
                <MessageList messages={messages} currentUserId={currentUserId}/>
            </div>
            <MessageInput onSendMessage={onSendMessage}/>
        </div>
    )
}