import { Metadata } from 'next';
import Header from '@components/header';
import AuthProvider from './auth-provider';
import QueryProvider from './query-provider';
import '@styles/globals.css';

export const endpoint:string = (process.env.NEXT_PUBLIC_GQL_ENDPOINT_PRODUCTION as string);
 
export const metadata: Metadata = {
  title: 'Interview Buddy',
  description: 'Welcome to Interview Buddy! The app created to help pair job seekers with industry professionals to practice various interview scenarios.',
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-[#A9DEF9]'>
          <QueryProvider>
            <AuthProvider>
              <Header />
              <main className="max-w-screen-xl mx-auto">
                {children}
              </main>
            </AuthProvider>
          </QueryProvider>
        </body>
      </html>
    )
};