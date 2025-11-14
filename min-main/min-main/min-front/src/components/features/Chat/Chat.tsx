import type React from "react";
import { MessageInput } from "../../modules/MessageInput/MessageInput";
import { ChatHeader } from "../../modules/ChatHeader/ChatHeader";
import type { Conversation } from "../../shared/types";
import styles from './Chat.module.css'
import { MessageList } from "../../modules/MessageList/MessageList";
import { useChatStore } from "../../../store/useChatStore";
import { useShallow } from "zustand/shallow";

interface ChatProps {
    conversation: Conversation | undefined
    currentUserId: string
    onSendMessage: (text: string) => void 
}

export const Chat: React.FC<ChatProps> = ({conversation, currentUserId, onSendMessage}) => {
    const {messages} = useChatStore(useShallow(state => ({
        messages: state.conversations.find(conv => conv.id === state.activeConversationId)?.messages
    })))

    if (!conversation) {
        return (
            <div className={`${styles.container} ${styles.hasntChat}`}><h2>!!!click to chat!!!</h2></div>
        )
    }

    return (
        <div className={styles.container}>
            <ChatHeader companion={conversation} />
            <div className={styles.messagesWrapper}>
                <MessageList messages={messages} currentUserId={currentUserId}/>
            </div>
            <MessageInput onSendMessage={onSendMessage}/>
        </div>
    )
}