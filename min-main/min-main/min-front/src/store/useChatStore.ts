import { create } from "zustand";
import type { ChatState, Conversation, Message, User } from "../components/shared/types";

interface ChatStore extends ChatState {
    setActiveConversation: (conversationId: string) => void
    sendMessage: (conversationId: string, text: string) => void
    markAsRead: (conversationId: string) => void
    searchConversations: (query: string) => Conversation[]
    getLastMessage: (conversationId: string) => Message | undefined
    // getConversationById: (conversationId: string) => Conversation | undefined
    // getUserById: (userId: string) => User | undefined
} 

const generateConversationId = (firstId: string, secondId: string) => {
    return `${firstId}_${secondId}`
}

const currentUser: User = {
    id: '1',
    name: 'www',
    avatar: 'data:image/jpeg;base64,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',
    status: 'online'
}

const mockUsers: User[] = [
    currentUser,
    {
        id: '2',
        name: 'www2',
        avatar: './public/1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
        status: 'online'
    },
    {
        id: '3',
        name: 'www3',
        avatar: 'data:image/jpeg;base64,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',
        status: 'online'
    },
]

const mockConversation: Conversation[] = [
    {
        id: generateConversationId('1', '2'),
        participants: [currentUser, mockUsers[1]],
        unreadCount: 0,
        messages: [
            {
                id: '1',
                text: '1',
                senderId: 'www2',
                timestamp: new Date(Date.now() - 30000),
                status: 'read'
            },
            {
                id: '2',
                text: '2',
                senderId: 'www',
                timestamp: new Date(Date.now() - 28000),
                status: 'read'
            },
            {
                id: '3',
                text: '3',
                senderId: 'www2',
                timestamp: new Date(Date.now() - 12000),
                status: 'read'
            },
        ]
    },
    {
        id: generateConversationId('1', '3'),
        participants: [currentUser, mockUsers[2]],
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
            conversations: state.conversations.map(conv => conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv)
        }))
    },

    searchConversations: (query: string) => {
        const { conversations } = get()
        
        if (!query.trim()) {
            return conversations
        }

        const queryLowerCase = query.toLowerCase()
        return conversations.filter(conv => {
            return conv.participants.find(p => p.id !== get().currentUser.id)?.name.toLowerCase().includes(queryLowerCase)
        })
    },

    getLastMessage: (conversationId: string) => {
        const { conversations } = get()
        let lastMessage = undefined
        conversations.forEach((conv) => {
            if (conv.id == conversationId) {
                lastMessage = conv.messages[conv.messages.length - 1] 
            }
        })
        return lastMessage  
    }
}))