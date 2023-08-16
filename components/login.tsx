'use client';

import { useState, MouseEvent, useContext } from "react";
import { useRouter } from 'next/navigation'
import SignUp from "@components/signup";
import { AuthContext } from "../app/auth-provider";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const user = useContext(AuthContext);

  const modalHandler = (e: MouseEvent<HTMLButtonElement>):void => {
    e.preventDefault()
    setModalShow(!modalShow)
  }

  const submitLogin = (event: { preventDefault: () => any; }) => {
    event.preventDefault();
    user.setUserId("1");
    router.push('/dashboard');
  };

  return (
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
            className="border border-black-300 mt-2 bg-[#D0F4DE]"
            type="submit"
            data-cy="signin"
            value="Sign In"
            />
        </form>
        <button 
          className="border border-black-300 mt-2 bg-[#FF99C8]"
          onClick={e => modalHandler(e)}
          data-cy="signup-button"
          >Sign Up</button>
      </section>
    </>
  )
}

export default Login;