import React  from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";


export default function EditorPage(){

    
    return (
        
        
        <div className="layout">
                    
            <SideBar />
            <TopBar />
            <main className="Main ">
               <section className="Editor-Page">

                <section className="Write-Post">
                    <p>Font Edits goes here</p>
                    <textarea></textarea>
                </section>

                <section className="Add-Image">
                    <span>+Add Image</span>
                    </section>

                <section className="Platform-And-Date">Platform and Date goes here</section>
                <section className="Write-Post-Buttons">

                    <button className="Save-as-Draft-Btn">Save as Draft</button>
                    <button className="Schedule-Post-Btn">Schedule Post</button>

                </section>
                     
             </section>
            </main>
        </div>
        
    )}