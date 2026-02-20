import { Service } from "@/lib/types";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";


interface Props {
  services: Service[];
}

export default function ServiceList({ services }: Props) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service) => (
       <Link key={service._id} href={`/services/${service._id}`}>
            <Card className="overflow-hidden hover:shadow-xl transition rounded-2xl cursor-pointer">
              
              <div className="relative h-40 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">
                  {service.title}
                </h3>
                <p className="text-gray-500">
                  ₹{service.price}
                </p>
              </CardContent>

            </Card>
          </Link>
      ))}
    </div>
  );
}
