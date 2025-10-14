import { Chat } from "./components/features/Chat/Chat"
import { DialogList } from "./components/features/DialogList/DialogList"
import styles from "./App.module.css"
import type { Conversation, Message } from "./components/shared/types"
import { useState } from "react"


const convs: Conversation[] = [
        {
            id: '1',
            user: {
                id: '1',
                name: '1',
                avatar: './1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
                online: true
            },
            lastMessage: {
                id: '1',
                text: '123',
                senderId: '2',
                timestamp: new Date(),
                status: 'delivered'
            },
            unreadCount: 11
        }
]

export const App = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '0',
            text: 'string',
            senderId: '0',
            timestamp: new Date(),
            status: 'readed'
        },
        {
            id: '1',
            text: 'string2',
            senderId: '1',
            timestamp: new Date(),
            status: 'readed'
        },
        {
            id: '2',
            text: 'string3',
            senderId: '1',
            timestamp: new Date(),
            status: 'readed'
        },
        {
            id: '3',
            text: 'string3',
            senderId: '0',
            timestamp: new Date(),
            status: 'readed'
        }
    ])

    const handleSendMessage = (text: string) => {
        const newMsg: Message = {
            id: Math.random().toString(),
            senderId: '1',
            text,
            timestamp: new Date(),
            status: 'sent'
        }

        setMessages(prev => [...prev, newMsg])
    }

    return (
        <div className={styles.main}>
            <DialogList conversation={convs} />
            <Chat conversation={convs[0]} messages={messages} currentUserId='1' onSendMessage={handleSendMessage} />
        </div>
    )
}