import type React from "react";
import type { Conversation } from "../../shared/types";
import { DialogCard } from "../../modules/DialogCard/DialogCard";
import styles from "./DialogList.module.css"

interface DialogList {
    conversations: Conversation[]
    activeConversationId?: string | null
    onConversationSelect: (conversationId: string) => void
    currentUserId: string
}

export const DialogList: React.FC<DialogList> = ({
    conversations,
    activeConversationId,
    onConversationSelect,
    currentUserId
}) => {
    return (
        <div className={`${styles.dialog_list}`}>
            {conversations.map(conv => (
                <DialogCard 
                    key={conv.id}
                    conversation={conv} 
                    isActive={conv.id === activeConversationId} 
                    onClick={() => {onConversationSelect(conv.id)}}
                    currentUserId={currentUserId}
                />
            ))}
        </div>
    )
}