"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Check } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { usePortingContext } from "@/context/PortingContext";

export default function PaymentSuccessContent() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const { state, dispatch } = useApp();
  const { portIn, portDetails } = usePortingContext();

  const session_id = searchParams.get("session_id");
  const enrollment_id = state.enrollment_id || searchParams.get("enrollment_id");

  useEffect(() => {
    if (!session_id || !enrollment_id) {
      setError("Missing required parameters");
      setLoading(false);
      return;
    }

    let isSubscribed = true;
    let redirectTimeout: NodeJS.Timeout;

    async function createTelgoo5User() {
      try {
        const response = await fetch("/api/telgoo/create-user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id,
            enrollment_id,
            portIn,
            ...(portIn && portDetails ? { portDetails } : {})
          }),
        });

        const data = await response.json();

        if (!isSubscribed) return;

        if (!response.ok) {
          if (data.error === 'USER_ALREADY_EXISTS') {
            redirectTimeout = setTimeout(() => {
              router.push("/dashboard");
            }, 3000);
            return;
          }
          throw new Error(data.message || 'Failed to create user');
        }

        const customer = data[0].data;

        if (customer) {
          dispatch({
            type: 'SET_USER_INFO',
            payload: {
              customer_id: customer.customer_id,
              first_name: customer.first_name,
              last_name: customer.last_name,
              email: customer.email,
              address_one: customer.address_one,
              address_two: customer.address_two,
              city: customer.city,
              state: customer.state,
              zip_code: customer.zip_code,
            },
          });
        }

        redirectTimeout = setTimeout(() => {
          router.push("/dashboard");
        }, 3000);
      } catch (err) {
        if (!isSubscribed) return;
        console.error("Error:", err);
        setError(err instanceof Error ? err.message : "Failed to complete setup");
      } finally {
        if (isSubscribed) {
          setLoading(false);
        }
      }
    }

    createTelgoo5User();

    return () => {
      isSubscribed = false;
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
    };
  }, [session_id, enrollment_id, router, dispatch, state, portIn, portDetails]);

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
            Your account is set up. You&apos;ll be redirected to your dashboard shortly.
          </p>
        </>
      )}
    </div>
  );
}