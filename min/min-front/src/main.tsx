import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DialogList } from './components/features/DialogList/DialogList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DialogList />
  </StrictMode>,
)
