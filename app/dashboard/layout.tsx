'use client';
import React, { useContext } from 'react';
import { AuthContext } from '../auth-provider';

const Layout = (
    { 
    alumuser,
    studentuser
    }: {
    alumuser: React.ReactNode
    studentuser: React.ReactNode
    }) => {
    
    const user = useContext(AuthContext);
        
    return (
        <>
            {(user.isLoggedIn && user.userType === "alum") && alumuser}
            {(user.isLoggedIn && user.userType === "student") && studentuser}
        </>
    )
}

export default Layout;