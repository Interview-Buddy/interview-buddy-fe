'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { AuthContext } from '../app/auth-provider';
import LogOutButton from './LogOutButton';

const Header = () => {
  const user = useContext(AuthContext);

  return (
    <header data-cy="header" className="w-screen bg-[#E4C1F9]">
      <div className="max-w-screen-xl mx-auto flex justify-between">
        <h1 className="p-4 text-3xl">
          <Link href="/">
            Interview Buddy
          </Link>
        </h1>
        {user.isLoggedIn && <LogOutButton />}
      </div>
    </header>
  )
}

export default Header