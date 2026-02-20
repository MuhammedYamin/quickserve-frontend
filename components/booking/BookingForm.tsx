"use client";

import { useState } from "react";
import { createBooking } from "@/lib/api";
import { useRouter } from "next/navigation";

interface Props {
  serviceId: string;
}

export default function BookingForm({ serviceId }: Props) {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setLoading(true);

     try {
    await createBooking({ serviceId, date, address });
    router.push("/bookings");
  } catch (err) {
    console.error(err);
    alert("Booking failed. Please try again.");
  } finally {
    setLoading(false);
  }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border p-2 w-full rounded"
        placeholder="Enter your address"
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        {loading ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
}
