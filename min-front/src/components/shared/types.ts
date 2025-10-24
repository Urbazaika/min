export interface User {
    id: string
    name: string
    avatar: string
    status: 'online' | 'offline'
}

export interface Message {
    id: string
    senderId: string
    text: string
    timestamp: Date
    status: 'sent' | 'delivered' | 'read'
}

export interface Conversation {
    id: string
    participants: User[]
    lastMessage: Message
    unreadCount: number
    messages: Message[]
}

export interface ChatState {
    conversations: Conversation[]
    activeConversationId: string | null
    currentUser: User
    users: User[]
}