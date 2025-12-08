import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EditorPage from "./pages/EditorPage";
import CalendarPage from "./pages/CalendarPage";


export default function App(){
    return (
        <>
        <h1>Smart Content Planer</h1>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
            </Routes>
        </BrowserRouter>
        </>
            
           
        
    )
}
