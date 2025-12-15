import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";


export default function CalendarPage(){
    return (
        <div className="layout">
                    
            <SideBar />
            <TopBar />
            <main>
                <h1>Calendar Page</h1>
            </main>
        </div>
    )
}