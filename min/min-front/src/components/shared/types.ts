export interface User {
    id: string
    name: string
    avatar: string
    online: boolean
}

export interface Message {
    
}

export interface Conversation {
    id: string
    user: User
    lastMessage: string
    unreadCount: number
}