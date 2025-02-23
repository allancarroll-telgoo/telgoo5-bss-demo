'use client';

import { usePortingContext } from '@/context/PortingContext';
import { PhoneForwarded } from 'lucide-react';

export default function PortingStatusCard() {
  const { portIn, portDetails } = usePortingContext();

  if (!portIn || !portDetails) return null;

  return (
    <div className="bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <PhoneForwarded className="w-6 h-6 text-brand-cyan" />
        <h3 className="text-xl font-semibold text-white">Port-In Status</h3>
      </div>
      <div className="space-y-3">
        <div>
          <span className="text-gray-400">Phone Number: </span>
          <span className="text-white">{portDetails.phoneNumber}</span>
        </div>
        <div>
          <span className="text-gray-400">Current Carrier: </span>
          <span className="text-white">{portDetails.carrier}</span>
        </div>
        <div>
          <span className="text-gray-400">Status: </span>
          <span className="text-brand-cyan">In Progress</span>
        </div>
      </div>
    </div>
  );
}