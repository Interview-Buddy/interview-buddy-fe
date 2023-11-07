"use client";
import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "../../auth-provider";

const StudentDashboard = () => {
    const user = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Caused error when not set to any
    return (
        <div>
            <h1>Welcome, {user.firstName}</h1>
            <button className="btn btn-outline m-8">View Upcoming Interviews</button>
        </div>
    );
};

export default StudentDashboard;