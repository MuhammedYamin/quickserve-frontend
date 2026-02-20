import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="text-center py-20 bg-indigo-600 text-white">
      <h2 className="text-3xl font-bold mb-4">
        Ready to Book a Service?
      </h2>

      <p className="mb-6">
        Get started and make your life easier.
      </p>

      <Button size="lg" className="bg-white text-indigo-600">
        Get Started
      </Button>
    </section>
  );
}
