import { Check } from "lucide-react"

const plans = [
  {
    name: "Essential",
    price: 29.99,
    data: "15GB",
    features: ["Unlimited talk & text", "5G access", "Mobile hotspot"],
  },
  {
    name: "Premium",
    price: 49.99,
    data: "Unlimited",
    features: [
      "Unlimited talk & text",
      "Priority 5G access",
      "Unlimited mobile hotspot",
      "International texting",
      "HD Streaming",
    ],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-brand-navy-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative bg-gradient-to-b from-brand-navy to-brand-navy-light border border-brand-cyan/20 rounded-lg p-8"
            >
              <div className="absolute inset-x-0 h-px -top-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50" />
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

