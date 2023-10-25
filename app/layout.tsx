import { Metadata } from 'next';
import Header from '@components/header';
import AuthProvider from './auth-provider';
import QueryProvider from './query-provider';
import '@styles/globals.css';
import React from 'react';
 
export const metadata: Metadata = {
  title: 'Interview Buddy',
  description: 'Welcome to Interview Buddy! The app created to help pair job seekers with industry professionals to practice various interview scenarios.',
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
    alumdash,
    studentdash
  }: {
    children: React.ReactNode,
    alumdash: React.ReactNode,
    studentdash: React.ReactNode
  }) {
    return (
      <html lang="en" data-theme="emerald">
        <body className="bg-neutral">
          <QueryProvider>
            <AuthProvider>
              <Header />
              <main className="max-w-screen-xl mx-auto">
                {children}
                {alumdash}
                {studentdash}
              </main>
            </AuthProvider>
          </QueryProvider>
        </body>
      </html>
    )
};