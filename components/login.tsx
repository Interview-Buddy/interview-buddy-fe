'use client';

import { useState, MouseEvent, useContext } from "react";
import { useRouter } from 'next/navigation'
import SignUp from "@components/signup";
import { AuthContext } from "../app/auth-provider";
import { auth } from "../configs/firebase.configs";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  const user = useContext(AuthContext);

  const modalHandler = (e: MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault()
    setModalShow(!modalShow)
  }

  // This submit function will call to firebase first which will retrieve the user's id,
  // then we can set the user's id which will trigger the onAuthStateChanged hook from Firebase
  const submitLogin = async (event: { preventDefault: () => any; }) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      const authenticatedUser = await signInWithEmailAndPassword(auth, email, password)
      user.setUuid(authenticatedUser.user.uid);
      router.push('/dashboard');
      setIsLoading(false)
    } catch (err: unknown){
      const errorMessage = err as FirebaseError
      console.log(errorMessage.message)
      setIsLoading(false)
    }
  };

  const buttonValue = ():string => {
    return isLoading ?
    "Loading ..." :
    "Sign In"
  }

  const loadingPulseEffect = ():string => {
    return isLoading ?
    "disabled:animate-pulse" :
    ""
  }

  return (
    user.isLoggedIn ? 
    router.push('/dashboard') 
    :
    <>
      {modalShow && <SignUp modalHandler={modalHandler}/>}

      <section className="flex flex-col items-center h-[40rem] place-content-center">
        <form className="flex flex-col items-center" onSubmit={submitLogin}>
          <div className="flex flex-col items-center">
            <label htmlFor="userEmail" data-cy="email-label">Email</label>
            <input
              id="userEmail"
              className="border border-black-300"
              type="text"
              value={email}
              data-cy="user-email"
              autoComplete="email"
              required={true}
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="userPassword" data-cy="password-label" className="mt-2">Password</label>
            <input 
              id="userPassword"
              className="border border-black-300"
              type="password"
              value={password}
              data-cy="user-password"
              autoComplete="current-password"
              required={true}
              onChange={e => setPassword(e.target.value)}
              />
          </div>
          <input
            className={`border border-black-300 mt-2 bg-[#D0F4DE] hover:cursor-pointer
              hover:bg-[#bde1cb] disabled:cursor-not-allowed disabled:brightness-75
              ${loadingPulseEffect()}`}
            type="submit"
            data-cy="signin"
            value={buttonValue()}
            disabled={isLoading || user.isLoggedIn}
          />
        </form>
        <button 
          className={`border border-black-300 mt-2 bg-[#FF99C8] hover:bg-[#d16f9d]
            disabled:cursor-not-allowed disabled:brightness-75 ${loadingPulseEffect()}`}
          onClick={e => modalHandler(e)}
          data-cy="signup-button"
          disabled={isLoading || user.isLoggedIn}
          >Sign Up
        </button>
      </section>
    </>
  )
}

export default Login;