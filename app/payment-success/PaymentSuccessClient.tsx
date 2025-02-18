"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function PaymentSuccessClient() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, dispatch } = useApp();

  const session_id = searchParams.get("session_id");
  const enrollment_id = state.enrollment_id || searchParams.get("enrollment_id");

  useEffect(() => {
    if (!session_id || !enrollment_id) {
      setError("Missing required parameters");
      setLoading(false);
      return;
    }

    async function createTelgoo5User() {
      try {
        const response = await fetch("/api/telgoo/create-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id, enrollment_id }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to create user");

        if (data.customer) {
          dispatch({
            type: 'SET_USER_INFO',
            payload: {
              first_name: data.customer.first_name,
              last_name: data.customer.last_name,
              email: data.customer.email,
              address_one: data.customer.address_one,
              address_two: data.customer.address_two,
              city: data.customer.city,
              state: data.customer.state,
              zip_code: data.customer.zip_code,
            },
          });
        }

        setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      } catch (err) {
        console.error("Error:", err);
        setError(err instanceof Error ? err.message : "Failed to complete setup");
      } finally {
        setLoading(false);
      }
    }

    createTelgoo5User();
  }, [session_id, enrollment_id, router, dispatch, state]);

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
      <div className="text-center max-w-md">
        {loading ? (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-cyan mx-auto mb-4" />
            <p className="text-gray-300">Setting up your account...</p>
          </>
        ) : (
          <>
            <div className="bg-brand-cyan/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Check className="w-8 h-8 text-brand-cyan" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-gray-300 mb-4">
              Your account is being set up. You&apos;ll be redirected to your dashboard shortly.
            </p>
          </>
        )}
      </div>
    </div>
  );
}