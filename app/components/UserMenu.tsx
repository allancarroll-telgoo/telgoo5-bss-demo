'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, LogOut } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function UserMenu() {
  const router = useRouter();
  const { state, dispatch } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    dispatch({ type: 'RESET' });
    router.push('/');
  };

  if (!state.customer_id || !state.first_name) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg hover:bg-brand-navy transition-colors"
      >
        <span>{state.first_name} {state.last_name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-brand-navy rounded-lg shadow-lg py-1">
          <button
            onClick={handleSignOut}
            className="w-full flex items-center space-x-2 px-4 py-2 text-white hover:bg-brand-navy-light transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}