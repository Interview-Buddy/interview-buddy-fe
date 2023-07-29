'use client';

import { useState, MouseEvent, FC } from "react"

interface SignUpProps {
  modalHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

const SignUp:FC<SignUpProps> = ( { modalHandler } ) => {
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selection, setSelection] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section className="flex flex-col items-center absolute inset-0 top-20 h-[40rem] place-content-center">
      <form 
        className="flex flex-col items-center box-border h-[21rem] w-64 p-4 bg-[#E4C1F9]">
        <div className="flex justify-end w-56">
          <button data-cy="exit-button" onClick={(e) => modalHandler(e)}>X</button>
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="displayName" data-cy="display-name-label">Display Name</label>
          <input
            id="displayName"
            className="border border-black-300"
            type="text"
            value={displayName}
            data-cy="display-name"
            autoComplete="name"
            onChange={e => setDisplayName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="email" data-cy="email-label">Email</label>
          <input 
            id="email"
            className="border border-black-300"
            type="email"
            value={email}
            data-cy="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="password" data-cy="password-label">Password</label>
          <input 
            id="password"
            className="border border-black-300"
            type="password"
            value={password}
            data-cy="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="confirmPassword" data-cy="confirm-password-label">Confirm Password</label>
          <input 
            id="confirmPassword"
            className="border border-black-300"
            type="password"
            value={confirmPassword}
            data-cy="confirm-password"
            autoComplete="current-password"
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="user-type" data-cy="user-type-label">User Type</label>
          <select id="user-type" data-cy="select" className="w-44"
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
          data-cy="submit"
          className="border border-black-300 mt-3 bg-[#D0F4DE]"
        />
      </form>
    </section>
  )
}

export default SignUp