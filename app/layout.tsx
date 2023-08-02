import { Metadata } from 'next';
import Header from '@components/header';
import '@styles/globals.css';
 
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
        <body>
            <Header />
            <main className="max-w-screen-xl mx-auto">
              {children}
            </main>
        </body>
      </html>
    )
};