import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ChatPage } from "./pages/ChatPage/ChatPage"
import { AuthPage } from "./pages/AuthPage/AuthPage"
import { RegPage } from "./pages/RegPage/RegPage"

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChatPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/reg" element={<RegPage />} />
            </Routes>
        </BrowserRouter>
    )
}