'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'
import SignUp from "./signup";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  const modalHandler = () => {
    setModalShow(!modalShow)
  }

  return (
    <>
      {modalShow && <SignUp />}

      <section className="flex flex-col items-center h-[45rem] place-content-center">
        <form className="flex flex-col items-center" onSubmit={(event) => {event.preventDefault(), router.push('/dashboard')}}>
          <div className="flex flex-col items-center">
            <label htmlFor="userEmail">Email</label>
            <input
              id="userEmail"
              className="border border-black-300"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="userPassword">Password</label>
            <input 
              id="userPassword"
              className="border border-black-300"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
          </div>
          <input
            className="border border-black-300"
            type="submit"
            value="Sign In"
            />
        </form>
        <button 
          className="border border-black-300"
          onClick={e => modalHandler()}
          >Sign Up</button>
      </section>
    </>
  )
}

export default Login;