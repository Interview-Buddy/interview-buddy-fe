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
                <div className="flex flex-row">
                    <label htmlFor="interview-type" data-cy="interview-type-label">Interview Type:</label>
                    <select id="interview-type" data-cy="select" className="ml-2 w-44 border-2"
                        onChange={e => setInterviewType(e.target.value)}
                    >
                        <option value="select">Select Type</option>
                        <option value="behavioral">Behavioral</option>
                        <option value="technical">Technical</option>
                    </select>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;