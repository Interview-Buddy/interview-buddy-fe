import Link from 'next/link';

const Header = () => {
  return (
    <header data-cy="header" className="w-screen bg-[#E4C1F9] flex space-between">
      <h1 className="p-2 text-3xl">
        <Link href="/">
          Interview Buddy
        </Link>
      </h1>
    </header>
  )
}

export default Header