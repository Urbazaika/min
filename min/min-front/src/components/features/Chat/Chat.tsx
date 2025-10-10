import type React from "react";
import { MessageInput } from "../../modules/MessageInput/MessageInput";
import { ChatHeader } from "../../modules/ChatHeader/ChatHeader";
import type { Conversation } from "../../shared/types";

interface ChatProps {
    conversation: Conversation
}

export const Chat: React.FC<ChatProps> = ({conversation}) => {
    return (
        <div>
            <ChatHeader companion={conversation} />
            <div></div>
            <MessageInput />
        </div>
    )
}