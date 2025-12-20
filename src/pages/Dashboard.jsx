import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";
 

export default function Dashboard(){
   
    return (
        <>
        
        <div className="layout">
            
            <SideBar /> 
            <TopBar />
            <main className="Main Dashboard">
             
                <section className="Cards">
                    <div className="Card">
                        <h3>Total Posts</h3>
                        <p className="Number">120</p>
                    </div>
                
                    <div className="Card">
                        <h3>Scheduled Posts</h3>
                        <p className="Number">90</p>
                    </div>
                
                    <div className="Card">
                        <h3>Drafted Posts</h3>
                        <p className="Number">30</p>
                    </div>
                
                    <div className="Card">
                        <h3>Platforms Used</h3>
                        <p className="Number">6</p>
                    </div>

                </section>
                <section className="Upcoming-Posts">

                    <h2 className="Title">Upcoming Posts</h2>

                    <div className="Upcoming-Post">
                        <img src="/assets/facebook.png"className="platform-icon" />
                        <p className="Preview">Facebook</p>
                        <span className="date">1/16/2024</span>
                    </div>

                    <div className="Upcoming-Post">
                        <img className="platform-icon" />
                        <p className="Preview">Instagram</p>
                        <span className="date">1/16/2024</span>
                    </div>

                    <div className="Upcoming-Post">
                        <img className="platform-icon" />
                        <p className="Preview">X</p>
                        <span className="date">1/16/2024</span>
                    </div>

                    <div className="buttons">
                        <button className="New-Post-Btn"> + Create New Post</button>
                        <button className="Add-to-Calendar-Btn"> + Add To Calendar</button>
                    </div>
                </section>
                
                <section className="Posts-By-Platform">
                    <h2 className="Title">Posts By Platform</h2>
                    
                    <div className="Chart">
                        
                        
                        <ol>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>X</li>
                            <li>LinkedIn</li>
                        </ol>
                    </div>
                    
                </section>

                <section className="Most-Used-Tags">
                    <h2 className="Title">Most Used Tags</h2>
                    <div className="Tag">
                        <p className="Tag-name">#TabbbbbbgName</p>
                        <p className="Tag-name">#TagName</p>
                        <p className="Tag-name">#TagName</p>
                        <p className="Tag-name">#TagName</p>
                        {/*<span className="Usage-count">15 uses</span>*/}
                    </div>
                </section>
             
            </main>
        </div>
        </>
    )
}