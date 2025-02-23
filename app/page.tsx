'use client';

import Hero from "./components/Hero"
import Plans from "./components/Plans"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Header from "./components/Header"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-brand-navy text-white">
      <Header />
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

