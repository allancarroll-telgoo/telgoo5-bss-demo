import React from 'react';
import UserMenu from '../components/UserMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-navy-light">
      {/* Dashboard Header */}
      <header className="bg-brand-navy shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
          <UserMenu />
        </div>
      </header>

      {children}
    </div>
  );
}