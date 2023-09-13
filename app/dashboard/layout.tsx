// 'use client';
import React from 'react';
// import { AuthContext } from '../auth-provider';

const Layout = (
    { 
        children,
    // alum,
    // student
    }: {
        children: React.ReactNode
    // alum: React.ReactNode
    // student: React.ReactNode
    }) => {
    
    // const user = useContext(AuthContext);
        
    return (
        <>
            {children}
            {/* {(user.isLoggedIn && user.userType === "alum") && alum}
            {(user.isLoggedIn && user.userType === "student") && student} */}
        </>
    )
}

export default Layout;