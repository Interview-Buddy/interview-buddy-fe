"use client";
import React, { useState, useContext, useRef, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import CalendarHeaderToolbar from "@components/CalendarHeaderToolbar";
import { AuthContext } from "../auth-provider";
import StudentDashboard from "./@studentdash/page";
import AlumDashboard from "./@alumdash/page";
import { getAuth } from "firebase/auth";
import { app } from '../../configs/firebase.configs'
import NotFound from "../not-found";

const Dashboard = () => {
    const user = useContext(AuthContext)
    const [userType, setUserType]= useState('');
    const [interviewType, setInterviewType] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Caused error when not set to any
    const calendarRef = useRef<any>();

    // if (!user.isLoggedIn) {
    //     return <NotFound />
    // }
    
    return (
        <div className="flex flex-col md:flex-row">
            <section className="flex flex-col p-4">
                <h2 className="text-2xl" data-cy="user-displayName">Mock Student</h2>
                <p data-cy="user-timezone">PST 00:00</p>
                <div className="flex flex-row md:flex-col">
                    <label htmlFor="interview-type" data-cy="interview-type-label">Interview Type:</label>
                    <select id="interview-type" data-cy="select-interview-type" className="ml-2 md:ml-0 w-35 border-2"
                        onChange={e => setInterviewType(e.target.value)}
                    >
                        <option value="select">Select Type</option>
                        {/* interviewType here from here*/}
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
                {user.userType === 'student' ? 
                <StudentDashboard/> :
                <AlumDashboard/>}
            </section>
        </div>
    );
};

export default Dashboard;