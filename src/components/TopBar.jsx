import React from 'react';
import { Outlet } from "react-router-dom"
export default function TopBar(){

    return (
        <div className="topbar">
            <h1>Title</h1>
            < Outlet />
        </div>
    )
}