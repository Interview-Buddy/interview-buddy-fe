"use client";
import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "../../auth-provider";

const StudentDashboard = () => {
    const user = useContext(AuthContext)
    console.log('student dash loaded')
    const [interviewType, setInterviewType] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Caused error when not set to any
    const calendarRef = useRef<any>();

    return (
        <div>
            <h1>Student Test Dash</h1>
        </div>
    );
};

export default StudentDashboard;