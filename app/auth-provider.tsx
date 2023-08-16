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
import { useUser } from '../api/user/user';

export interface User {
    company: string | null | undefined;
    displayName: string | null | undefined;
    email: string | null | undefined;
    firstName: string | null | undefined;
    id: string | undefined | undefined;
    isLoggedIn: boolean;
    lastName: string | null | undefined;
    pronouns: string | null | undefined;
    userType: number | null | undefined;
    setUserId: Dispatch<SetStateAction<string | undefined>>;
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
    userType: null,
    setUserId: () => {},
});

interface AuthProviderProps {
    children: ReactNode;
}
 
const AuthProvider: FC<AuthProviderProps> = (props) => {
    const [company, setCompany] = useState<string | null | undefined>('');
    const [displayName, setDisplayName] = useState<string | null | undefined>('');
    const [email, setEmail] = useState<string | null>('');
    const [firstName, setFirstName] = useState<string | null | undefined>('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [lastName, setLastName] = useState<string | null | undefined>('');
    const [pronouns, setPronouns] = useState<string | null | undefined>('');
    const [userId, setUserId] = useState<string | undefined>("1");
    const [userType, setUserType] = useState<number | null | undefined>(null);
    const { data } = useUser(userId, email);

    useEffect(() => {
        if (data && data.user !== null && data.user.id === userId) {
            const { user } = data;
            setCompany(user.company)
            setDisplayName(user.displayName)
            setEmail(user.email)
            setFirstName(user.firstName)
            setIsLoggedIn(true)
            setLastName(user.lastName)
            setPronouns(user.pronouns)
            setUserType(user.userType)
        }
    }, [data, userId]);

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
            userType: userType,
            setUserId: setUserId
        }}>
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;