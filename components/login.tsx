'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'
import SignUp from "./signup";

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [modal, showModal] = useState(true);
  const router = useRouter();

  return (
    <>
      {modal && <SignUp />}

      <section className="flex flex-col items-center">
        <form className="flex flex-col items-center" onSubmit={(event) => {event.preventDefault(), router.push('/dashboard')}}>
          <div className="flex flex-col items-center">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName" 
              className="border border-black-300"
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Password</label>
            <input 
              id="password"
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
          onClick={e => showModal(true)}
          >Sign Up</button>
      </section>
    </>
  )
}

export default Login;