import { Service } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <Link href={`/services/${service._id}`}>
      <Card className="hover:shadow-xl transition rounded-2xl cursor-pointer overflow-hidden">
        <div className="relative h-40 w-full">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="text-gray-500">₹{service.price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
