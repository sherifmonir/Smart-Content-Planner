import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";

export default function EditorPage(){
    return (
        <div className="editor-page">
                    <SideBar />
                    <main>
                        <TopBar />
                        <h1>Editor Page Content</h1>
                    </main>
                </div>
    )
}