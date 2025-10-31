import { Chat } from "./components/features/Chat/Chat"
import styles from "./App.module.css"
import type { Conversation, Message, User } from "./components/shared/types"
import { useState } from "react"
import { SideBar } from "./components/features/Sidebar/Sidebar"

const currentUser: User = {
    id: '1',
    name: '1',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYzO8semY8fwATIAu2BT5uz8QA7DRBUODMw&s',
    online: true
}

const conversations: Conversation[] = [
    {
        id: '1',
        user: {
            id: '2',
            name: 'id: 2',
            avatar: './1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
            online: false
        },
        lastMessage: {
            id: '124',
            text: 'wzp',
            senderId: '2',
            timestamp: new Date(Date.now() - 30000),
            status: 'readed'
        },
        unreadCount: 0,
        messages: [
            {
                id: '123',
                text: 'qq',
                senderId: '1',
                timestamp: new Date(Date.now() - 35000),
                status: 'readed'
            },
            {
                id: '124',
                text: 'wzp',
                senderId: '2',
                timestamp: new Date(Date.now() - 30000),
                status: 'readed'
            }
        ]
    },
]

export const App = () => {
    const [activeConversation, setActiveConversation] = useState<Conversation | null>(null)
    const currentUserId = '1'

    const handleConversationSelect = (conv: Conversation) => {setActiveConversation(conv)}

    const handleSendMessage = (text: string) => {
        const newMsg: Message = {
            id: Math.random().toString(),
            senderId: currentUserId,
            text,
            timestamp: new Date(),
            status: 'sent'
        }

        setMessages(prev => [...prev, newMsg])
    }

    return (
        <div className={styles.main}>
            <SideBar 
                conversations={convs} 
                activeConversationId={activeConversation?.id}
                onConversationSelect={handleConversationSelect}
                currentUserId={currentUserId}
            />
            <Chat 
                conversation={activeConversation} 
                messages={messages} 
                onSendMessage={handleSendMessage} 
                currentUserId={currentUserId} 
            />
        </div>
    )
}