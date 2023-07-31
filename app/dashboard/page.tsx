"use client";
import React, { useState } from "react";
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
                <FullCalendar
                    //Used to set the height of the calendar content without scroll
                    contentHeight={'auto'}
                    //dayGridPlugin: Month and Day grid views, interactionPlugin: required to detect dateClick actions, selectable actions, and event drag-n-drop & resizing.
                    plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin
                    ]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                />
            </section>
        </div>
    );
};

export default Dashboard;