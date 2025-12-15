import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";
import {Pie, PieChart} from 'recharts'; 

export default function Dashboard(){
    const data = [
  { platform: "Instagram", posts: 40 },
  { platform: "Twitter", posts: 25 },
  { platform: "LinkedIn", posts: 20 },
  { platform: "Facebook", posts: 15 },
];
    return (
        
        <div className="layout">
            
            <SideBar /> 
            <TopBar />
            <main>
            <div className="Dashboard-page">
                {/*<section className="Cards">*/}
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

                {/*</section>*/}
                <section className="Upcoming-Posts">

                    <h2>Upcoming Posts</h2>

                    <div className="Upcoming-Post">
                        <img className="platform-icon" />
                        <p className="Preview">Preview</p>
                        <span className="date">Date</span>
                    </div>

                    <div className="Upcoming-Post">
                        <img className="platform-icon" />
                        <p className="Preview">Preview</p>
                        <span className="date">Date</span>
                    </div>

                    <div className="Upcoming-Post">
                        <img className="platform-icon" />
                        <p className="Preview">Preview</p>
                        <span className="date">Date</span>
                    </div>

                    <div>
                        <button className="New-Post">Create New Post</button>
                        <button className="Add-to-Calendar">Add To Calendar</button>
                    </div>
                </section>
                
                <section className="Posts-By-Platform">
                    <h2>Posts By Platform</h2>
                    <div className="Chart">
                        
                        <PieChart width={300} height={300}>
                            <Pie
                              data={data}
                              dataKey="posts"
                              nameKey="platform"
                              cx="50%"
                              cy="50%"
                              outerRadius={100}
                            />
                            
                            


                        </PieChart>
                    </div>

                </section>

                <section className="Most-Used-Tags">
                    <h2>Most Used Tags</h2>
                    <div className="Tag">
                        <p className="Tag-name">#TagName</p>
                        <p className="Tag-name">#TagName</p>
                        <p className="Tag-name">#TagName</p>
                        <p className="Tag-name">#TagName</p>
                        {/*<span className="Usage-count">15 uses</span>*/}
                    </div> 
                </section>
            </div>
            </main>
        </div>
        
    )
}