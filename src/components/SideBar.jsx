import React from 'react';

export default function SideBar(){
    return (
    <aside className="sidebar">
        <div className= "logo-name">
            <h1>SideBar</h1>
        </div>
        <div className="navigation-bar">
            <a href="/">Dashboard</a>
            <a href="/editor">Calendar</a>
            <a href="/calendar">Editor</a>
        </div>
    </aside>
    )
}