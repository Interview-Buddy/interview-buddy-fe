import Link from 'next/link';

const notFound = () => {
  return (
    <main className="text-center max-w-screen-xl flex justify-center mt-10">
        <div className="bg-[#E4C1F9] w-72 p-4">
            <h2 className="text-2xl">There was a problem.</h2>
            <p>We could not find the page you were looking for.</p>
            <p>Go back to the <Link href="/" className="underline text-sky-400">Home Page</Link></p>
        </div>
    </main>
  );
};

export default notFound;