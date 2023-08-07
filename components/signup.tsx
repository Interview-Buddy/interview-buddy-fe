'use client';

import { useState, MouseEvent, FC } from "react"

interface SignUpProps {
  modalHandler: (e: MouseEvent<HTMLButtonElement>) => void
}

const SignUp:FC<SignUpProps> = ( { modalHandler } ) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selection, setSelection] = useState('');

  return (
    <section className="flex flex-col items-center absolute inset-0 top-20 h-[40rem] place-content-center">
      <form 
        className="flex flex-col items-center box-border h-[27rem] w-64 p-4 bg-[#E4C1F9]">
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
            autoComplete="name"
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
            autoComplete="name"
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
        <div className="flex flex-col items-center">
          <label htmlFor="user-type" data-cy="user-type-label" className="mt-2">User Type</label>
          <select id="user-type" data-cy="select" className="w-44"
            onChange={e => setSelection(e.target.value)}
            required={true}
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