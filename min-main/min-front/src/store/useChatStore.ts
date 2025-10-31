import { create } from "zustand";
import type { ChatState, Conversation, Message, User } from "../components/shared/types";

interface ChatStore extends ChatState {
    setActiveConversation: (conversationId: string) => void
    sendMessage: (conversationId: string, text: string) => void
    markAsRead: (conversationId: string) => void
    searchConversations: (query: string) => Conversation[]
    getConversationById: (conversationId: string) => Conversation | undefined
    getUserById: (userId: string) => User | undefined
} 

const generateConversationId = (firstId: string, secondId: string) => {
    return `${firstId}_${secondId}`
}

const currentUser: User = {
    id: '123',
    name: 'www',
    avatar: './public/1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
    status: 'online'
}

const mockUsers: User[] = [
    currentUser,
    {
        id: '223',
        name: 'www2',
        avatar: './public/1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
        status: 'online'
    },
]

const mockConversation: Conversation[] = [
    {
        id: generateConversationId('123', '223'),
        participants: [currentUser, mockUsers[1]],
        lastMessage: {
            id: '3',
            text: 'herll',
            senderId: 'www2',
            timestamp: new Date(Date.now() - 12000),
            status: 'read'
        },
        unreadCount: 0,
        messages: [
            {
                id: '1',
                text: 'herll',
                senderId: 'www2',
                timestamp: new Date(Date.now() - 30000),
                status: 'read'
            },
            {
                id: '2',
                text: 'herll',
                senderId: 'www',
                timestamp: new Date(Date.now() - 28000),
                status: 'read'
            },
            {
                id: '3',
                text: 'herll',
                senderId: 'www2',
                timestamp: new Date(Date.now() - 12000),
                status: 'read'
            },
        ]
    }
]

export const useChatStore = create<ChatStore>((set, get) => ({
    conversations: mockConversation,
    activeConversationId: null,
    currentUser,
    users: mockUsers,

    setActiveConversation: (conversationId: string) => {
        set({activeConversationId: conversationId})
        get().markAsRead(conversationId)
    },

    sendMessage: (conversationId: string, text: string) => {
        if (!text.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            senderId: get().currentUser.id,
            text: text.trim(),
            timestamp: new Date(),
            status: 'sent',
        }

        set(state => ({
            conversations: state.conversations.map(conv => {
                if (conv.id === conversationId) {
                    return {
                        ...conv,
                        messages: [...conv.messages, newMessage],
                        lastMessage: newMessage
                    }
                }
                return conv
            })
        }))
    },

    markAsRead: (conversationId: string) => {
        set(state => ({
            conversations: state.conversations.map(conv => conv.id === conversationId ? {  } :)
        }))
    },

    searchConversations: () => {}
}))