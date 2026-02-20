import { fetchService } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import BookingForm from "@/components/booking/BookingForm";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ServicePage({ params }: Props) {
   const { id } = await params; 
   const service = await fetchService(id);

  if (!service) {
    return notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      
      <div className="grid md:grid-cols-2 gap-10">

        
        {/* Image */}
        <div className="relative w-full h-80 rounded-2xl overflow-hidden">
          <Image
            src={service.image || "/images/fallback.png"} 
            alt={service.title || "service title"}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {service.title}
            </h1>

            <p className="text-gray-600 mb-6">
              {service.description}
            </p>

            <p className="text-2xl font-semibold text-indigo-600 mb-6">
              ₹{service.price}
            </p>
          </div>

               <BookingForm serviceId={service._id} />

        </div>
      </div>

    </main>
  );
}
