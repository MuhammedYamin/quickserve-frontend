import { fetchBookings } from "@/lib/api";

export default async function BookingsPage() {
  const bookings = await fetchBookings();

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>
      <ul className="space-y-4">
        {bookings.map((b) => (
          <li key={b._id} className="border p-4 rounded">
            <p className="font-semibold">{b.serviceName} - ₹{b.price}</p>
            <p>Date: {b.date}</p>
            <p>Address: {b.address}</p>
            <p>Status: {b.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
