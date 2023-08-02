"use client";
import React, { useState, useRef } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const mockStudent = {
    displayName: "Mock Student",
    id: "1",
    email: "mockStudent@test.com",
    userType: "student"
}

const Dashboard = () => {
    const [interviewType, setInterviewType] = useState('');
    //Caused error when not set to any
    const calendarRef = useRef<any>();

    //Working here creating custom headerToolbar. Break into own component? Add title, month, week, and day buttons. Disable buttons until calendar rendered? Prev/Next icons instead of words.
    const handlePrev = () => {
        const calendarApi = calendarRef.current.getApi()
        calendarApi.prev()
    }

    const handleToday = () => {
        const calendarApi = calendarRef.current.getApi()
        calendarApi.today()
    }

    const handleNext = () => {
        const calendarApi = calendarRef.current.getApi()
        calendarApi.next()
    }

    return (
        <div className="flex flex-col md:flex-row">
            <section className="flex flex-col p-4">
                <h2 className="text-2xl" data-cy="user-displayName">{mockStudent.displayName}</h2>
                <p data-cy="user-timezone">PST 00:00</p>
                <div className="flex flex-row md:flex-col">
                    <label htmlFor="interview-type" data-cy="interview-type-label">Interview Type:</label>
                    <select id="interview-type" data-cy="select" className="ml-2 md:ml-0 w-35 border-2"
                        onChange={e => setInterviewType(e.target.value)}
                    >
                        <option value="select">Select Type</option>
                        <option value="behavioral">Behavioral</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>
            </section>
            <section className="p-4 w-full h-full">
                <div className="p-4 bg-white">
                    <div className="mb-4">
                        <button className="border-2 p-1 mr-2" onClick={handlePrev}>Prev</button>
                        <button className="border-2 p-1 mr-2" onClick={handleToday}>Today</button>
                        <button className="border-2 p-1" onClick={handleNext}>Next</button>
                    </div>
                    <FullCalendar
                        ref={calendarRef} 
                        //Used to set the height of the calendar content without scroll
                        contentHeight={'auto'}
                        //dayGridPlugin: Month and Day grid views, interactionPlugin: required to detect dateClick actions, selectable actions, and event drag-n-drop & resizing.
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin
                        ]}
                        //Set to false so we can create our own header toolbar with custom buttons/actions
                        headerToolbar={false}
                    />
                </div>
            </section>
        </div>
    );
};

export default Dashboard;