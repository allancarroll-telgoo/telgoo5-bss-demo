"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getPlanList } from "@/lib/telgoo5Api";
import { Check } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { Plan } from "@/lib/telgoo5Api";

export default function PlanListPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { state, dispatch } = useApp();

  // Redirect if no enrollment data
  useEffect(() => {
    if (!state.enrollment_id || !state.zip_code) {
      router.replace('/');
      return;
    }
  }, [state.enrollment_id, state.zip_code, router]);

  useEffect(() => {
    async function fetchPlans() {
      try {
        const planList = await getPlanList({ zip_code: state.zip_code! });
        setPlans(planList);
      } catch (err) {
        console.error("Error fetching plans:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlans();
  }, [state.zip_code]);

  const handleSelectPlan = (planId: string) => {
    // Find the selected plan to get its price
    const selectedPlan = plans.find(p => p.plan_id === planId);
    if (!selectedPlan) return;

    // Store plan in context
    dispatch({
      type: 'SELECT_PLAN',
      payload: {
        id: planId,
        name: selectedPlan.plan_name,
        price: Number(selectedPlan.plan_price)
      }
    });

    // Navigate to port-in-number page instead of payment
    router.push('/port-in-number');
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
            key={plan.plan_id}
            className="relative flex flex-col bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-8"
          >
            <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
            <h2 className="text-2xl font-bold mb-4">{plan.plan_name}</h2>
            <p className="text-4xl font-bold mb-6 text-brand-cyan">
              ${Number(plan.plan_price).toFixed(2)}
              <span className="text-xl font-normal text-gray-400">/mo</span>
            </p>
            <div className="space-y-4 mb-6">
              <p className="text-lg">
                <span className="text-gray-400">Data: </span>
                <span className="text-white">{plan.data_unlimited === 'Y' ? 'Unlimited' : `${plan.data}MB`}</span>
              </p>
              <p className="text-lg">
                <span className="text-gray-400">Talk: </span>
                <span className="text-white">{plan.minute_unlimited === 'Y' ? 'Unlimited' : `${plan.talk} minutes`}</span>
              </p>
              <p className="text-lg">
                <span className="text-gray-400">Text: </span>
                <span className="text-white">{plan.text_unlimited === 'Y' ? 'Unlimited' : `${plan.text} messages`}</span>
              </p>
            </div>
            <div className="flex-grow">
              {plan.display_features_description?.length > 0 && (
                <ul className="mb-8 space-y-3">
                  {plan.display_features_description.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="text-brand-cyan mr-2 h-5 w-5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={() => handleSelectPlan(plan.plan_id)}
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