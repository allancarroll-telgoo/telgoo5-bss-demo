"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '../context/AppContext';
import PortingStatusCard from '../components/PortingStatusCard';

export default function DashboardPage() {
  const router = useRouter();
  const { state } = useApp();

  // Redirect to home if not authenticated
  useEffect(() => {
    if (!state.customer_id) {
      // router.push('/');
      console.log('No customer id');
      console.log(state);
    }
  }, [state.customer_id, router]);

  if (!state.customer_id) return null;

  return (
    <>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          <div className="bg-brand-navy rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium text-white mb-4">Welcome back, {state.first_name}!</h2>
            {/* Add more dashboard content here */}
          </div>

          {/* Porting Status Card */}
          <PortingStatusCard />
        </div>
      </main>
    </>
  );
}