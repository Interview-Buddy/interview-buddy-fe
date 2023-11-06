"use client";
import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "../../auth-provider";

const AlumDashboard = () => {
    const user = useContext(AuthContext)
    const [interviewType, setInterviewType] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    {console.log("USER:", user)}
    //Caused error when not set to any
    return (
    <div className="flex">
        <h1 className="text-lg m-8">Welcome, Angie{user.firstName}</h1>
        <button className="btn btn-outline m-8">Create New Interview</button>
        <button className="btn btn-outline m-8">View Upcoming Interviews</button>
    </div>
    );
};

export default AlumDashboard;