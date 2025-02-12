"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPlanList } from "@/lib/telgoo5Api";
import { Check } from "lucide-react";
import { useSubscription } from "@/context/SubscriptionContext";

interface Plan {
  name: string;
  price: number;
  data: string;
  features: string[];
}

export default function PlanListPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { state, dispatch } = useSubscription();

  // Redirect if no enrollment data
  useEffect(() => {
    if (!state.enrollment_id || !state.zip) {
      router.replace('/');
      return;
    }
  }, [state.enrollment_id, state.zip, router]);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const planList = await getPlanList();
        setPlans(planList);
      } catch (err) {
        console.error("Error fetching plans:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlans();
  }, []);

  const handleSelectPlan = (planName: string) => {
    // Find the selected plan to get its price
    const selectedPlan = plans.find(p => p.name === planName);
    if (!selectedPlan) return;

    // Store plan in context
    dispatch({
      type: 'SELECT_PLAN',
      payload: {
        name: selectedPlan.name,
        price: selectedPlan.price
      }
    });

    // Navigate to payment without query params
    router.push('/make-payment');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading plans...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-navy-light p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
        Select Your Plan
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative flex flex-col bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-8"
          >
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6 text-brand-cyan">
              ${plan.price}
              <span className="text-xl font-normal text-gray-400">/mo</span>
            </p>
            <p className="text-lg mb-6">{plan.data} data</p>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="text-brand-cyan mr-2 h-5 w-5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleSelectPlan(plan.name)}
              className="w-full bg-brand-cyan text-brand-navy hover:bg-brand-cyan-dark py-2 rounded mt-auto"
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}