import React from 'react';
import { Outlet } from "react-router-dom"
import { IoNotifications } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";



export default function TopBar(){

    return (
        <div className="topbar">
            <h1>Page name goes here</h1>
            <div className="topbar-elements">
                <input type="text" placeholder="Search..."  className="search-bar"/>
                <a href="/notifications"  >
                <IoNotifications className="topbar-icon"/>
                </a>
                <a href="/profile" >
                <MdAccountCircle className="topbar-icon"/>
                </a>
            </div>

        </div>
    )
}