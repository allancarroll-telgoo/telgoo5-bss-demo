import { Signal, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Signal,
    title: "Ultra-Fast 5G",
    description: "Experience the future with our cutting-edge 5G network technology.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Stay protected with state-of-the-art encryption and security measures.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Connect anywhere with our extensive nationwide network coverage.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brand-cyan/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-brand-cyan bg-clip-text text-transparent">
          Why Choose Allan Wireless
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg border border-brand-cyan/20 bg-brand-navy-light/50"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-brand-cyan" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

