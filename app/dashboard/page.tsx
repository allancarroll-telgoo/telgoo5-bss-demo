"use client";

import React from 'react';
import { Check } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-navy-light flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="bg-brand-cyan/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
          <Check className="w-8 h-8 text-brand-cyan" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-white">Success!</h1>
        <p className="text-gray-300 mb-4">Your transaction was successful. Thank you for your payment.</p>
      </div>
    </div>
  );
}