'use client'
 
import { createContext, FC, ReactNode, useState } from 'react';

export interface User {
    company: string | null;
    displayName: string | null;
    email: string | null;
    firstName: string | null;
    id: string | undefined;
    isLoggedIn: boolean;
    lastName: string | null;
    pronouns: string | null;
    userType: number | null;
};
 
export const AuthContext = createContext<User>({
    company: null,
    displayName: null,
    email: null,
    firstName: null,
    id: undefined,
    isLoggedIn: false,
    lastName: null,
    pronouns: null,
    userType: null
});

interface AuthProviderProps {
    children: ReactNode;
}
 
const AuthProvider: FC<AuthProviderProps> = (props) => {
    const [company, setCompany] = useState<string | null>('');
    const [displayName, setDisplayName] = useState<string | null>('');
    const [email, setEmail] = useState<string | null>('');
    const [firstName, setFirstName] = useState<string | null>('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lastName, setLastName] = useState<string | null>('');
    const [pronouns, setPronouns] = useState<string | null>('');
    const [userId, setUserId] = useState<string | undefined>(undefined);
    const [userType, setUserType] = useState<number | null>(null);

    return (
        <AuthContext.Provider value={{
            company: company,
            displayName: displayName,
            email: email,
            firstName: firstName,
            id: userId,
            isLoggedIn: isLoggedIn,
            lastName: lastName,
            pronouns: pronouns,
            userType: userType
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;