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
    <div>
        <h1>Welcome, {user.firstName}</h1>
        

    </div>
    );
};

export default AlumDashboard;