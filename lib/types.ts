export interface Service {
  _id: string;
  number: string;
  title: string;
  description: string;
  price: number;
  slug: string;
  color: string;
  image: string;
  category?: string;
  tags?: string[];
  available: boolean;
}

export interface Booking {
  _id: string;
  service: string; // service _id
  serviceName: string;
  price: number;
  date: string;
  address: string;
  status: "pending" | "confirmed" | "cancelled";
}
