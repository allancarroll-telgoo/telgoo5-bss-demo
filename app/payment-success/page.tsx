"use client";

import { Suspense } from "react";
import PaymentSuccessContent from "./PaymentSuccessContent";

// Loading fallback component
function PaymentSuccessLoading() {
  return (
    <div className="min-h-screen bg-brand-navy-light flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyan mx-auto mb-4" />
        <p className="text-gray-300">Loading payment details...</p>
      </div>
    </div>
  );
}

// Main page component with Suspense boundary
export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-brand-navy-light flex items-center justify-center p-4">
      <Suspense fallback={<PaymentSuccessLoading />}>
        <PaymentSuccessContent />
      </Suspense>
    </div>
  );
}