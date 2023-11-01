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
  const [pronouns, setPronouns] = useState('');
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
      let strongEnough = false;
      password.length > 6 ? strongEnough = true : strongEnough = false;
      if (!strongEnough) {
        return <h2 className='text-[#FFE47F]'>Please choose a password of 6 chars of length or more...</h2>
      }
      else {
        return password === confirmPassword ?
        <h2 className="text-[#D0F4DE]">Password matches!</h2> :
        <h2 className="text-[#FFE47F]">Password does not match</h2>
      }
      
    }
    else {
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

  const buttonValue = ():string => {
    return isLoading ?
    "Loading ..." :
    "Submit"
  }

  const loadingPulseEffect = ():string => {
    return isLoading ?
    "disabled:animate-pulse" :
    ""
  }

  return (
    <section className="flex flex-col items-center absolute inset-0 top-20 h-[40rem] place-content-center">
      <form onSubmit={createAccount}
        className="join join-vertical p-12 bg-secondary">
        <div className="flex justify-end w-56">
          <button className="text-accent-content text-lg" data-cy="exit-button" onClick={(e) => modalHandler(e)}>X</button>
        </div>
          <label className="label text-secondary-content" htmlFor="firstName" data-cy="first-name-label">First Name</label>
          <input
            id="firstName"
            className="input input-primary bg-secondary-focus input-sm"
            type="text"
            value={firstName}
            data-cy="first-name"
            autoComplete="given-name"
            required={true}
            onChange={e => setFirstName(e.target.value)}
          />
          <label className="label text-secondary-content" htmlFor="lastName" data-cy="last-name-label">Last Name</label>
          <input
            id="lastName"
            className="input input-primary input-sm bg-secondary-focus"
            type="text"
            value={lastName}
            data-cy="last-name"
            autoComplete="family-name"
            required={true}
            onChange={e => setLastName(e.target.value)}
          />
          <label className="label text-secondary-content" htmlFor="pronouns" data-cy="pronouns-label">Pronouns</label>
          <input
            id="firstName"
            className="input input-primary input-sm bg-secondary-focus"
            type="text"
            value={pronouns}
            data-cy="pronouns"
            autoComplete="pronouns"
            required={true}
            onChange={e => setPronouns(e.target.value)}
          />
          <label className="label text-secondary-content" htmlFor="email" data-cy="email-label">Email</label>
          <input 
            id="email"
            className="input input-primary input-sm bg-secondary-focus"
            type="email"
            value={email}
            data-cy="email"
            autoComplete="email"
            required={true}
            onChange={e => setEmail(e.target.value)}
          />
          <label className="label text-secondary-content" htmlFor="password" data-cy="password-label">Password</label>
          <input 
            id="password"
            className="input input-primary input-sm bg-secondary-focus"
            type="password"
            value={password}
            data-cy="password"
            autoComplete="current-password"
            required={true}
            onChange={e => setPassword(e.target.value)}
          />
          <label className="label text-secondary-content" htmlFor="confirmPassword" data-cy="confirm-password-label">Confirm Password</label>
          <input 
            id="confirmPassword"
            className="input input-primary input-sm bg-secondary-focus"
            type="password"
            value={confirmPassword}
            data-cy="confirm-password"
            autoComplete="current-password"
            required={true}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        <div data-cy="password-match-message">
          {passwordChecker()}
        </div>
          <label className="label text-secondary-content" htmlFor="user-type" data-cy="user-type-label">User Type</label>
          <select id="user-type" data-cy="select-user-type" className="select select-sm bg-secondary-focus text-secondary-content"
            onChange={e => setUserType(Number(e.target.value))}
            required={true}
          >
            <option value="">Select Type</option>
            <option value="0">Student</option>
            <option value="1">Alum</option>
          </select>
        <button
          className={`btn btn-primary btn-sm
            ${loadingPulseEffect()}`}
          type="submit" 
          value={buttonValue()}
          data-cy="submit"
          disabled={isLoading || user.isLoggedIn}>
            SUBMIT
        </button>
      </form>
    </section>
  )
}

export default SignUp