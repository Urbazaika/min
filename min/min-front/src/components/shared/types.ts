export interface User {
    id: string
    name: string
    avatar: string
    online: boolean
}

export interface Message {
    id: string
    text: string
    senderId: string
    timestamp: Date
    status: string
}

export interface Conversation {
    id: string
    user: User
    lastMessage: Message
    unreadCount: number
}