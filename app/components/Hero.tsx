"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSubscription } from "@/context/SubscriptionContext";
import { checkServiceAvailability } from "@/lib/telgoo5Api";
import Image from "next/image";

export default function Hero() {
  const [zip, setZip] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { dispatch } = useSubscription();

  const handleZipSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!zip.match(/^\d{5}$/)) {
      setError("Please enter a valid 5-digit ZIP code");
      return;
    }

    try {
      const { available, enrollment_id } = await checkServiceAvailability({ zip });

      if (!available) {
        setError("Service is not available in your area");
        return;
      }

      // Store enrollment data in context
      dispatch({
        type: 'SET_ENROLLMENT',
        payload: {
          enrollment_id: enrollment_id || `ENROLL_${Date.now()}`,
          zip
        }
      });

      // Navigate to plan selection
      router.push('/plan-list');
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'Failed to check service availability');
    }
  };

  return (
    <div className="relative flex items-center">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="mb-8">
          <Image src="/logo.png" alt="Allan Wireless Logo" width={360} height={120} className="mx-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
          Experience Next-Gen Connectivity
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Check if high-speed mobile service is available at your location
        </p>
        <form onSubmit={handleZipSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Enter ZIP code"
              className="flex-1 px-4 py-3 rounded-lg bg-brand-navy border border-brand-cyan/20 text-white placeholder-gray-400 focus:outline-none focus:border-brand-cyan"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-brand-cyan text-brand-navy rounded-lg hover:bg-brand-cyan-dark transition-colors"
            >
              Check
            </button>
          </div>
          {error && (
            <p className="mt-4 text-red-500">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

