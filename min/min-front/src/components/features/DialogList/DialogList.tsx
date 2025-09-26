import type React from "react";
import type { Conversation } from "../../shared/types";
import { DialogCard } from "../../modules/DialogCard/DialogCard";
import styles from "./DialogList.module.css"

export const DialogList: React.FC = () => {
    const convs: Conversation[] = [
        {
            id: '1',
            user: {
                id: '1',
                name: 'ksusha',
                avatar: './1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
                online: true
            },
            lastMessage: 'hello',
            unreadCount: 11
        },
        {
            id: '2',
            user: {
                id: '1',
                name: 'ksusha',
                avatar: './1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
                online: false
            },
            lastMessage: 'hello',
            unreadCount: 0
        }
    ]

    return (
        <div className={`${styles.dialog_list}`}>
            {convs.map(conv => (
                <DialogCard conversation={conv} isActive={true} onClick={() => console.log('print')}/>
            ))}
        </div>
    )
}