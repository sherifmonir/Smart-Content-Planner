import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";
export default function Dashboard(){
    return (
        <div className="layout">
            <SideBar />
            <main>
                <TopBar />
                <h1>Dashboard Content</h1>
            </main>
        </div>
    )
}