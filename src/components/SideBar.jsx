import React from 'react';
import { MdAnalytics, MdDarkMode  } from "react-icons/md";
import { FaCalendar, FaEdit, FaChartPie } from "react-icons/fa";

import { IoIosSettings } from "react-icons/io";



export default function SideBar(){
    return (
    <aside className="sidebar">
        <div className= "logo-name">
            <FaChartPie className="logo"  />
            <h1 className="site-name">Planify</h1>
        </div>
        <div className="navigation-bar">
            
            <a href="/">
                
                    <MdAnalytics className="sidebar-icon" />
                    Dashboard
            </a>
            
            
            <a href="/calendar">
                
                    <FaCalendar className="sidebar-icon" />
                    Calendar
                
            </a>
            
            
            <a href="/editor">
                
                    <FaEdit className="sidebar-icon" />
                    Editor
                
            </a>
            
        </div>


        <div className="settings">

            <a href="/settings">
            
                    <IoIosSettings className="sidebar-icon" />
                    Settings
            </a>
            
            <a>
                
                    <MdDarkMode className="sidebar-icon" /> 
                    Night Mode
            </a>
                
            
        </div>
    </aside>
    )
}