import type React from "react";
import { useChatStore } from "../../store/useChatStore";
import { memo, useMemo, useState } from "react";
import { Chat } from "../../components/features/Chat/Chat";
import { SideBar } from "../../components/features/Sidebar/Sidebar";
import styles from "./ChatPage.module.css"

export const ChatPage: React.FC = memo(() => {
    const {
        conversations,
        activeConversationId,
        currentUser,
        setActiveConversation,
        sendMessage,
        searchConversations,
        getLastMessage,
        // getConversationById
    } = useChatStore()

    const [searchQuery, setSearchQuery] = useState('')

    const activeConversation = useMemo(() => {
        const result = conversations.find(el => el.id === activeConversationId)
        return result
    }, [activeConversationId])

    const filteredConverstions = useMemo(() => {
        return searchConversations(searchQuery)
    }, [searchQuery, searchConversations])

    const handleConversationSelect = (conversationId: string) => {
        setActiveConversation(conversationId)
    } 

    const handleSearchChange = (query: string) => {
        setSearchQuery(query)
    }

    const handleSendMessage = (text: string) => {
        if (activeConversationId) {
            sendMessage(activeConversationId, text)
        }
    }

    return (
        <div className={styles.main}>
            <SideBar 
                conversations={filteredConverstions} 
                activeConversationId={activeConversationId}
                onConversationSelect={handleConversationSelect}
                currentUserId={currentUser.id}
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                getLastMessage={getLastMessage}
            />
            <Chat 
                conversation={activeConversation}  
                onSendMessage={handleSendMessage} 
                currentUserId={currentUser.id} 
            />
        </div>
    )
})