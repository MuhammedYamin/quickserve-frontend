import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Features from "@/components/home/Features";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
