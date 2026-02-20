export default function Features() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8 text-center">
        
        <div>
          <h3 className="font-semibold text-xl mb-2">
            Verified Professionals
          </h3>
          <p className="text-gray-500">
            All service providers are background checked.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">
            Quick Booking
          </h3>
          <p className="text-gray-500">
            Book services in less than 60 seconds.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">
            Affordable Prices
          </h3>
          <p className="text-gray-500">
            Transparent pricing with no hidden charges.
          </p>
        </div>

      </div>
    </section>
  );
}
