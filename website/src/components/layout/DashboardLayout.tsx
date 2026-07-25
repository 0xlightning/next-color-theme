import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 font-sans text-zinc-900 dark:text-zinc-50">
      <Sidebar />
      <div className="flex flex-col flex-1 sm:gap-4 sm:py-4">
        <Header />
        <main className="flex-1 items-start p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
