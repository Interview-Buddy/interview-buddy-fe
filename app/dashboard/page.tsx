'use client'
import React, { useContext } from "react";
import StudentUser from "./@student/page";
import AlumUser from "./@alum/page";
import { AuthContext } from "../auth-provider";

const Dashboard = () => {
    const user = useContext(AuthContext);

    return (
        <>
            {(user.isLoggedIn && user.userType === "alum") && <AlumUser />}
            {(user.isLoggedIn && user.userType === "student") && <StudentUser />}
        </>
    );
};

export default Dashboard;