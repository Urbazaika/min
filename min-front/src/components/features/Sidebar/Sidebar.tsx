import type React from "react"
import styles from './Sidebar.module.css'
import { SearchInput } from "../../modules/SearchInput/SearchInput"
import { DialogList } from "../DialogList/DialogList"
import type { Conversation, Message } from "../../shared/types"

interface SideBarProps {
    conversations: Conversation[]
    activeConversationId?: string | null
    onConversationSelect: (conversationId: string) => void
    currentUserId: string
    searchQuery: string
    onSearchChange: (query: string) => void
    getLastMessage: (converstionId: string) => Message | undefined
}

export const SideBar: React.FC<SideBarProps> = ({
    conversations,
    activeConversationId,
    onConversationSelect,
    currentUserId,
    searchQuery,
    onSearchChange,
    getLastMessage
}) => {

    return (
        <div className={styles.container}>
            <div className={styles.queryContainer}>
                <SearchInput 
                    value={searchQuery}
                    onChange={onSearchChange}
                />
            </div>
            <div className={styles.listContainer}>
                <DialogList 
                    conversations={conversations}
                    getLastMessage={getLastMessage}
                    activeConversationId={activeConversationId}
                    onConversationSelect={onConversationSelect}
                    currentUserId={currentUserId}
                />
            </div>
        </div>
    )
}