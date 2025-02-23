'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePortingContext } from '@/app/context/PortingContext';
import Header from '@/app/components/Header';

export default function PortInNumberPage() {
  const router = useRouter();
  const { setPortIn, setPortDetails } = usePortingContext();
  const [showPortForm, setShowPortForm] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    carrier: '',
    accountNumber: '',
    accountPassword: '',
    pin: ''
  });

  const handleNewNumber = () => {
    setPortIn(false);
    setPortDetails(undefined);
    router.push('/make-payment');
  };

  const handlePortOption = () => {
    setPortIn(true);
    setShowPortForm(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.phoneNumber || !formData.carrier || !formData.accountNumber || !formData.accountPassword || !formData.pin) {
      alert('Please fill in all fields.');
      return;
    }
    setPortDetails(formData);
    router.push('/make-payment');
  };

  return (
    <div className="min-h-screen bg-brand-navy text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
          Choose Your Number Option
        </h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            onClick={handleNewNumber}
            className="relative bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-8 cursor-pointer hover:border-brand-cyan/40 transition-all"
          >
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
            <h2 className="text-2xl font-bold mb-4 text-brand-cyan">Get a New Number</h2>
            <p className="text-gray-300">Let us assign a new number to you. Quick and easy setup.</p>
          </div>

          <div
            onClick={handlePortOption}
            className="relative bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-8 cursor-pointer hover:border-brand-cyan/40 transition-all"
          >
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
            <h2 className="text-2xl font-bold mb-4 text-brand-cyan">Port Your Existing Number</h2>
            <p className="text-gray-300">Keep your current number when switching to our service.</p>
          </div>
        </div>

        {showPortForm && (
          <form
            onSubmit={handleSubmit}
            className="mt-12 max-w-xl mx-auto bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-cyan">Enter Porting Details</h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-navy border border-brand-cyan/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan"
                  placeholder="Enter your current phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="carrier">
                  Current Carrier
                </label>
                <input
                  id="carrier"
                  name="carrier"
                  type="text"
                  value={formData.carrier}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-navy border border-brand-cyan/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan"
                  placeholder="Enter your current carrier name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  id="accountNumber"
                  name="accountNumber"
                  type="text"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-navy border border-brand-cyan/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan"
                  placeholder="Enter your carrier account number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="accountPassword">
                  Account Password
                </label>
                <input
                  id="accountPassword"
                  name="accountPassword"
                  type="password"
                  value={formData.accountPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-navy border border-brand-cyan/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan"
                  placeholder="Enter your account password"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2" htmlFor="pin">
                  PIN
                </label>
                <input
                  id="pin"
                  name="pin"
                  type="text"
                  value={formData.pin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-brand-navy border border-brand-cyan/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan"
                  placeholder="Enter your account PIN"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-8 px-8 py-3 bg-brand-cyan text-brand-navy rounded-lg hover:bg-brand-cyan-dark transition-colors font-medium"
            >
              Continue to Payment
            </button>
          </form>
        )}
      </main>
    </div>
  );
}