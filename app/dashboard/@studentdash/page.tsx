"use client";
import React, { useState, useContext, useRef } from "react";
import { AuthContext } from "../../auth-provider";

const StudentDashboard = () => {
    const user = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Caused error when not set to any
    return (
        <div>
            <h1>Student Test Dash</h1>
        </div>
    );
};

export default StudentDashboard;