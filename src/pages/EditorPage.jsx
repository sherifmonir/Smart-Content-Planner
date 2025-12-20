import React  from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";


export default function EditorPage(){

    
    return (
        
        
        <div className="layout">
                    
            <SideBar />
            <TopBar />
            <main className="Main Editor-Page">
               

                <section classsName="Write-Post"></section>
                <section classsName="Add-Image"></section>
                <section classsName="Platform-And-date"></section>
                <section classsName="Write-Post-Buttons"></section>

            </main>
        </div>
        
    )}