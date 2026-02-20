import { fetchServices } from "@/lib/api";
import ServiceList from "@/components/services/ServiceList";

export default async function Services() {
    const services = await fetchServices();

  return (
     <section className="px-8 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Popular Services</h2>
      <ServiceList services={services} />
    </section>
  );
}
