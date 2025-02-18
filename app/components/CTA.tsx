import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-brand-cyan/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-transparent to-brand-navy" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future?</h2>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Join Allan Wireless today and step into a world of unlimited possibilities.
        </p>
        <Button size="lg" className="bg-brand-cyan text-brand-navy hover:bg-brand-cyan-dark">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}
