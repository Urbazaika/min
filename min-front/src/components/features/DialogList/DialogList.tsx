import type React from "react";
import type { Conversation } from "../../shared/types";
import { DialogCard } from "../../modules/DialogCard/DialogCard";
import styles from "./DialogList.module.css"

interface DialogList {
    conversation: Conversation[]
}

export const DialogList: React.FC<DialogList> = ({conversation}) => {
    return (
        <div className={`${styles.dialog_list}`}>
            {conversation.map(conv => (
                <DialogCard conversation={conv} isActive={true} onClick={() => console.log('print')}/>
            ))}
        </div>
    )
}