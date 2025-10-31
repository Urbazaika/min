import { create } from "zustand";
import type { ChatState, Conversation, Message, User } from "../components/shared/types";

interface ChatStore extends ChatState {
    setActiveConversation: (conversationId: string) => void
    sendMessage: (conversationId: string, text: string) => void
    markAsRead: (conversationId: string) => void
    searchConversations: (query: string) => Conversation[]
} 

const generateConversationId = (firstId: string, secondId: string) => {
    return `${firstId}_${secondId}`
}

const currentUser: User = {}

const mockUsers: User[] = [
    currentUser,
]

const mockConversation: Conversation[] = []

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
            conversations: state.conversations.map(conv => conv.id)
        }))
    },

    searchConversations: () => {}
}))