import React from 'react';

const Layout = (
    { 
    children,
    AlumUser,
    StudentUser
    }: {
    children: React.ReactNode
    AlumUser: React.ReactNode
    StudentUser: React.ReactNode
    }) => {
    
    
        
    return (
        <>
            
            {children}
        </>
    )
}

export default Layout;