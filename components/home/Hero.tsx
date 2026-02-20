import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-24 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        Book Trusted Home Services <br /> Instantly
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
        Professional electricians, plumbers, cleaners and more — 
        all at your doorstep in minutes.
      </p>

      <div className="flex justify-center gap-4">
        <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
          Explore Services
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-indigo-600"
        >
          How it Works
        </Button>
      </div>

    </section>
  );
}
