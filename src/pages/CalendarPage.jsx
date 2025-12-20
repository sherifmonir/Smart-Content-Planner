import React from 'react';
import TopBar from "../components/TopBar.jsx";
import SideBar from "../components/SideBar.jsx";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";


export default function CalendarPage(){

    const events = [
  {
    title: "Instagram Post",
    date: "2025-01-15",
  },
  {
    title: "Twitter Thread",
    date: "2025-01-18",
  },
  {
    title: "Facebook Update",
    date: "2025-01-22",
  },
];

    return (
 <>
           
        <div className="layout">
                    
            <SideBar />
            <TopBar />
            <main className="Main Calendar-page">
                
    


      <div className="Calendar">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="auto"
        />
      </div>
    
  

            </main>
        </div>
</>
    )
}