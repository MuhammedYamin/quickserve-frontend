import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">QuickServe</h1>

      <div className="flex gap-4">
        <Link href="/services">
          <Button variant="outline">Services</Button>
        </Link>
                <Link href="/bookings">
          <Button variant="outline">My Bookings</Button>
        </Link>
        <Button>Login</Button>
      </div>
    </nav>
  );
}
