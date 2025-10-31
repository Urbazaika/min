import type React from "react"
import styles from './Sidebar.module.css'
import { SearchInput } from "../../modules/SearchInput/SearchInput"
import { DialogList } from "../DialogList/DialogList"
import type { Conversation } from "../../shared/types"
import { useMemo, useState } from "react"

interface SideBarProps {
    conversations: Conversation[]
    activeConversationId?: string
    onConversationSelect: (conv: Conversation) => void
    currentUserId: string
}

export const SideBar: React.FC<SideBarProps> = ({
    conversations,
    activeConversationId,
    onConversationSelect,
    currentUserId
}) => {
    const [searchQuery, setSearchQuery] = useState('')
    const handleSearchChange = (v: string) => {setSearchQuery(v)}

    const filteredConversations = useMemo(() => {
        if (!searchQuery.trim()) return conversations

        return conversations.filter((conv) => {
            return conv.user.name.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }, [conversations, searchQuery])

    return (
        <div className={styles.container}>
            <div className={styles.queryContainer}>
                <SearchInput 
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className={styles.listContainer}>
                <DialogList 
                    conversations={filteredConversations}
                    activeConversationId={activeConversationId}
                    onConversationSelect={onConversationSelect}
                    currentUserId={currentUserId}
                />
            </div>
        </div>
    )
}