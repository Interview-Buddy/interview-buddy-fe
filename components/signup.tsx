'use client';

import { useState, MouseEvent, FC, useContext } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../configs/firebase.configs";
import { useRouter } from 'next/navigation'
import { AuthContext } from "../app/auth-provider";
import { useCreateUser } from "../api/user/user";

interface SignUpProps {
  modalHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

const SignUp:FC<SignUpProps> = ( { modalHandler } ) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userType, setUserType] = useState(3);
  const [isLoading, setIsLoading] = useState(false)
  const user = useContext(AuthContext);
  const router = useRouter()
  const createUser = useCreateUser()

  const passwordChecker = (): JSX.Element | null => {
    if (password && confirmPassword) {
      return password === confirmPassword ?
      <h2 className="text-[#D0F4DE]">Password matches!</h2> :
      <h2 className="text-[#FFE47F]">Password does not match</h2>
    } else {
       return null
    }
  }

  const divHeightAdjustor = (notifyHeight:string, defaultHeight:string): string => {
    return password && confirmPassword ?
    notifyHeight :
    defaultHeight
  }

  const createAccount = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const createdUser = await createUserWithEmailAndPassword(auth, email, password)
      createUser.mutate({
        firstName: firstName,
        lastName: lastName,
        email: email,
        uuid: createdUser.user.uid,
        userType: userType,
        pronouns: "pronouns",
        displayName: "displayName",
        company: "company"
       }
        , {
        onError: (err: unknown) => {console.log(err)},
        onSuccess: () => {
          user.setUuid(createdUser.user.uid)
          router.push('/dashboard');
        },
        onSettled: () => {
          setIsLoading(false)
        }
      })
    } catch (err: unknown) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <section className="flex flex-col items-center absolute inset-0 top-20 h-[40rem] place-content-center">
      <form onSubmit={createAccount}
        className={`flex flex-col items-center box-border ${divHeightAdjustor("h-[28rem]", "h-[26.5rem]")} w-64 p-4 bg-[#E4C1F9]`}>
        <div className="flex justify-end w-56">
          <button data-cy="exit-button" onClick={(e) => modalHandler(e)}>X</button>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="firstName" data-cy="first-name-label">First Name</label>
          <input
            id="firstName"
            className="border border-black-300"
            type="text"
            value={firstName}
            data-cy="first-name"
            autoComplete="given-name"
            required={true}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="lastName" data-cy="last-name-label" className="mt-2">Last Name</label>
          <input
            id="lastName"
            className="border border-black-300"
            type="text"
            value={lastName}
            data-cy="last-name"
            autoComplete="family-name"
            required={true}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="email" data-cy="email-label" className="mt-2">Email</label>
          <input 
            id="email"
            className="border border-black-300"
            type="email"
            value={email}
            data-cy="email"
            autoComplete="email"
            required={true}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="password" data-cy="password-label" className="mt-2">Password</label>
          <input 
            id="password"
            className="border border-black-300"
            type="password"
            value={password}
            data-cy="password"
            autoComplete="current-password"
            required={true}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="confirmPassword" data-cy="confirm-password-label" className="mt-2">Confirm Password</label>
          <input 
            id="confirmPassword"
            className="border border-black-300"
            type="password"
            value={confirmPassword}
            data-cy="confirm-password"
            autoComplete="current-password"
            required={true}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div data-cy="password-match-message">
          {passwordChecker()}
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="user-type" data-cy="user-type-label" className="mt-2">User Type</label>
          <select id="user-type" data-cy="select-user-type" className="w-44"
            onChange={e => setUserType(Number(e.target.value))}
            required={true}
          >
            <option value="">Select Type</option>
            <option value="0">Student</option>
            <option value="1">Alum</option>
          </select>
        </div>
        <input 
          className="border border-black-300 mt-3 bg-[#D0F4DE] hover:bg-[#bde1cb]
            hover:cursor-pointer disabled:cursor-not-allowed disabled:brightness-75
            disabled:animate-pulse"
          type="submit" 
          value="Submit"
          data-cy="submit"
          disabled={isLoading || user.isLoggedIn}
        />
      </form>
    </section>
  )
}

export default SignUp