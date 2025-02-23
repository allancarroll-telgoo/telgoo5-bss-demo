"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { useApp } from "@/context/AppContext";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function MakePaymentPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { state } = useApp();

  // Redirect if missing required data
  useEffect(() => {
    if (!state.enrollment_id || !state.zip_code || !state.selectedPlan) {
      router.replace('/');
      return;
    }
  }, [state, router]);

  useEffect(() => {
    async function redirectToCheckout() {
      try {
        const stripe = await stripePromise;
        if (!stripe) throw new Error('Stripe failed to initialize.');

        const response = await fetch('/api/stripe/create-checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plan_id: state.selectedPlan!.id,
            plan_name: state.selectedPlan!.name,
            price: state.selectedPlan!.price,
            zip_code: state.zip_code,
            enrollment_id: state.enrollment_id,
          }),
        });

        const { sessionId, error } = await response.json();
        if (error) throw new Error(error);

        const result = await stripe.redirectToCheckout({
          sessionId,
        });

        if (result.error) {
          throw new Error(result.error.message);
        }
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Failed to redirect to checkout');
      }
    }

    if (state.selectedPlan) {
      redirectToCheckout();
    }
  }, [state]);

  if (error) {
    return (
      <div className="min-h-screen bg-brand-navy-light flex items-center justify-center p-4">
        <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-red-500">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-navy-light flex items-center justify-center p-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyan mx-auto mb-4"></div>
        <p className="text-gray-300">Redirecting to secure payment...</p>
      </div>
    </div>
  );
}