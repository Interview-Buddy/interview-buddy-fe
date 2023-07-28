'use client';

import { useState } from "react"

const SignUp = () => {
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selection, setSelection] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="flex flex-col items-center absolute inset-0 top-20 h-[40rem] place-content-center">
      <form 
        className="flex flex-col items-center box-border h-80 w-64 p-4 bg-indigo-500">
      <div className="flex flex-col items-center">
          <label htmlFor="displayName">Display Name</label>
          <input
            id="displayName"
            className="border border-black-300"
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="email">Email</label>
          <input 
            id="email"
            className="border border-black-300"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <div className="flex flex-col items-center">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input 
            id="confirmPassword"
            className="border border-black-300"
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="user-type">User Type</label>
          <select id="user-type" className="w-44"
            onChange={e => setSelection(e.target.value)}
          >
            <option value="select">Select Type</option>
            <option value="student">Student</option>
            <option value="alum">Alum</option>
          </select>
        </div>
        <input 
          type="submit" 
          value="Submit" 
          className="border border-black-300"
        />
      </form>
    </section>
  )
}

export default SignUp