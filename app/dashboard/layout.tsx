'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../auth-provider';

const Layout = (
    { 
    alum,
    student
    }: {
    alum: React.ReactNode
    student: React.ReactNode
    }) => {
    
    const user = useContext(AuthContext);
        
    return (
        <>
            {(user.isLoggedIn && user.userType === "alum") && alum}
            {(user.isLoggedIn && user.userType === "student") && student}
        </>
    )
}

export default Layout;