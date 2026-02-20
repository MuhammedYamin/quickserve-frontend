import { Service, Booking } from "./types";

const API_BASE = "http://localhost:5000/api";

export async function fetchServices(): Promise<Service[]> {
  const res = await fetch(`${API_BASE}/services`);
  return res.json();
}

export async function fetchService(id: string): Promise<Service> {
  const res = await fetch(`${API_BASE}/services/${id}`);
  
  return res.json();
}

export async function fetchBookings(): Promise<Booking[]> {
  const res = await fetch(`${API_BASE}/bookings`);
  return res.json();
}

export async function createBooking(data: {
  serviceId: string;
  date: string;
  address: string;
}): Promise<Booking> {
  const res = await fetch(`${API_BASE}/bookings`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
