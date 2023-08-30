"use client";
import React, { useState, useRef } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CalendarHeaderToolbar from "@components/CalendarHeaderToolbar";
import LogOutButton from "@components/LogOutButton";

const mockStudent = {
    firstName: "Mock",
    lastName: "Student",
    id: "1",
    email: "mockStudent@test.com",
    userType: "student"
}

const Dashboard = () => {
    const [interviewType, setInterviewType] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Caused error when not set to any
    const calendarRef = useRef<any>();

    return (
        <>
            <div className="flex justify-end">
                <LogOutButton />
            </div>
            <div className="flex flex-col md:flex-row">
                <section className="flex flex-col p-4">
                    <h2 className="text-2xl" data-cy="user-displayName">{`${mockStudent.firstName} ${mockStudent.lastName}`}</h2>
                    <p data-cy="user-timezone">PST 00:00</p>
                    <div className="flex flex-row md:flex-col">
                        <label htmlFor="interview-type" data-cy="interview-type-label">Interview Type:</label>
                        <select id="interview-type" data-cy="select-interview-type" className="ml-2 md:ml-0 w-35 border-2"
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
                        <CalendarHeaderToolbar calendarRef={calendarRef} isLoading={isLoading} />
                        <FullCalendar
                            //Used to reference the calendar and be able to access the Calendar API in the custom headerToolbar
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
                            viewDidMount={() => setIsLoading(false)}
                        />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dashboard;