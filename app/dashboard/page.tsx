"use client";
import React, { useState } from "react";

const mockStudent = {
    displayName: "Mock Student",
    id: "1",
    email: "mockStudent@test.com",
    userType: "student"
}

const Dashboard = () => {
    const [interviewType, setInterviewType] = useState('');

    return (
        <div className="flex">
            <section className="flex flex-col p-4">
                <h2 className="text-2xl" data-cy="user-displayName">{mockStudent.displayName}</h2>
                <p data-cy="user-timezone">PST 00:00</p>
            </section>
        </div>
    );
};

export default Dashboard;