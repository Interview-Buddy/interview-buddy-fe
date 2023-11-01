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
  
  user.isLoggedIn ? 
  router.push('/dashboard') :
  null

  return (
    <>
      {modalShow && <SignUp modalHandler={modalHandler}/>}
      <button
        className="btn btn-secondary"
        onClick={e => modalHandler(e)}
        data-cy="signup-button"
        disabled={isLoading || user.isLoggedIn}>
          Sign Up
      </button>
      <section className="flex flex-col items-center h-[40rem] place-content-center">
        <form className="join-vertical" onSubmit={submitLogin}>
          <div>
            <label className="label" htmlFor="userEmail" data-cy="email-label">Email</label>
            <input
              id="userEmail"
              className="join-item input input-bordered input-secondary"
              type="text"
              value={email}
              data-cy="user-email"
              autoComplete="email"
              required={true}
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          <div className="join-item">
            <label htmlFor="userPassword" data-cy="password-label" className="label">Password</label>
            <input 
              id="userPassword"
              className="join-item input input-bordered input-secondary"
              type="password"
              value={password}
              data-cy="user-password"
              autoComplete="current-password"
              required={true}
              onChange={e => setPassword(e.target.value)}
              />
          </div>
          <button
            className="join-item btn btn-primary"
            type="submit"
            data-cy="signin"
            value={buttonValue()}
            disabled={isLoading || user.isLoggedIn}
            >Sign In</button>
          {/* <button 
          className="btn btn-secondary"
          onClick={e => modalHandler(e)}
          data-cy="signup-button"
          disabled={isLoading || user.isLoggedIn}
          >Sign Up
         </button> */}
        </form>
      </section>
    </>
  )
}

export default Login;