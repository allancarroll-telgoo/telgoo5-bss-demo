'use client';

import Hero from "./components/Hero"
import Plans from "./components/Plans"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

import { useEffect } from 'react';
import { useApp } from '@/context/AppContext';

export default function Home() {
  const { dispatch } = useApp();

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-white">
      <main>
        <Hero />
        <Plans />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

