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
            lastMessage: {
                id: '1',
                text: '123',
                senderId: '2',
                timestamp: new Date(),
                status: 'delivered'
            },
            unreadCount: 11
        },
        {
            id: '2',
            user: {
                id: '2',
                name: 'ksusha2',
                avatar: './1dc4744b-86a2-4d0e-bb81-95dd3e287df8 1.png',
                online: false
            },
            lastMessage: {
                id: '1',
                text: '456',
                senderId: '2',
                timestamp: new Date(),
                status: 'delivered'
            },
            unreadCount: 0
        }
    ]

    return (
        <div className={`${styles.dialog_list}`}>
            {convs.map(conv => (
                <DialogCard conversation={conv} isActive={false} onClick={() => console.log('print')}/>
            ))}
        </div>
    )
}