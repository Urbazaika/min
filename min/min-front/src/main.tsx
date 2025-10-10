import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DialogList } from './components/features/DialogList/DialogList'
import { Chat } from './components/features/Chat/Chat'
import type { Conversation } from './components/shared/types'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <DialogList /> */}
    <Chat conversation={convs[1]} />
  </StrictMode>,
)
