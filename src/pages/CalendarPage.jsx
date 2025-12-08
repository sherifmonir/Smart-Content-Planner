import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";
export default function CalendarPage(){
    return (
        <div className="calendar-page">
                    <SideBar />
                    <main>
                        <TopBar />
                        <h1>Calendar Content</h1>
                    </main>
                </div>
    )
}