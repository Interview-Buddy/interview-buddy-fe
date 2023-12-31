'use client'
 
import { 
    createContext, 
    FC, 
    ReactNode, 
    useState, 
    Dispatch, 
    SetStateAction,
    useEffect 
} from 'react';

import {
    getAuth,
    signOut,
    setPersistence,
    browserLocalPersistence,
    onAuthStateChanged
} from 'firebase/auth';

import { useUser } from '../api/user/user';
import { app } from '../configs/firebase.configs'

export interface User {
    company: string | null | undefined;
    displayName: string | null | undefined;
    email: string | null | undefined;
    firstName: string | null | undefined;
    isLoggedIn: boolean;
    uuid: string | null | undefined;
    lastName: string | null | undefined;
    pronouns: string | null | undefined;
    userType: string | null | undefined;
    setUuid: Dispatch<SetStateAction<string | null | undefined>>;
};
 
export const AuthContext = createContext<User>({
    company: null,
    displayName: null,
    email: null,
    firstName: null,
    uuid: undefined,
    isLoggedIn: false,
    lastName: null,
    pronouns: null,
    userType: null,
    setUuid: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}
 
const AuthProvider: FC<AuthProviderProps> = (props) => {
    const auth = getAuth(app)
    setPersistence(auth, browserLocalPersistence);
    const [company, setCompany] = useState<string | null | undefined>('');
    const [displayName, setDisplayName] = useState<string | null | undefined>('');
    const [email, setEmail] = useState<string | null>('');
    const [firstName, setFirstName] = useState<string | null | undefined>('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lastName, setLastName] = useState<string | null | undefined>('');
    const [pronouns, setPronouns] = useState<string | null | undefined>('');
    const [uuid, setUuid] = useState<string |null | undefined>("");
    const [userType, setUserType] = useState<string |null | undefined>(undefined);
    const { data } = useUser(uuid, email);

    // Will need the onAuthStateChanged hook from Firebase which will set the user's email,
    // which will then enable the useUser query to fetch the user's data from the BE
    // Once that data is retrieved, will set the rest of the user's properties in the useEffect below
    // How do we use 'nextOrObserver' callback on the auth instance change occuring?
    useEffect(() => {
        const listen = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setDisplayName(user.displayName);
                setEmail(user.email);
                setUuid(user.uid);
            } else {
                setFirstName('')
                setLastName('')
                setDisplayName('');
                setPronouns('')
                setUuid('');
                setEmail('');
                setUserType(undefined)
                setCompany('')
                setIsLoggedIn(false);
                signOut(auth);
            }
        })

        return () => {
            listen();
        };
    }, [auth]);

    useEffect(() => {
        if (data && data.user !== null && data.user.uuid === uuid) {
            const { user } = data;
            console.log('ln 99 Auth useEffect:', data);
            setCompany(user.company)
            setDisplayName(user.displayName)
            setEmail(user.email)
            setFirstName(user.firstName)
            setIsLoggedIn(true)
            setLastName(user.lastName)
            setPronouns(user.pronouns)
            setUserType(user.userType)
            setUuid(user.uuid)
        }
    }, [data, uuid]);

    return (
        <AuthContext.Provider value={{
            company: company,
            displayName: displayName,
            email: email,
            firstName: firstName,
            isLoggedIn: isLoggedIn,
            uuid: uuid,
            lastName: lastName,
            pronouns: pronouns,
            userType: userType,
            setUuid: setUuid,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;