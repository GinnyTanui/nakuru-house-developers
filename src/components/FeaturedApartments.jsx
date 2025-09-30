import Apartment1 from "../images/2-bedroom-apartment.jpg";
import Apartment2 from "../images/3-bedroom-apartment.jpg";
import Apartment3 from "../images/gated-community.jpg";
import { Building2, MapPin } from "lucide-react";

const FeaturedApartments = () =>  {
  return (
    <section id="featured-apartments" className="py-12 px-6 md:px-16 bg-gray-50">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Featured Apartments for Sale in Nakuru
      </h2>

      {/* Apartments Grid */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Apartment 1 */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src={Apartment1}
            alt="2-bedroom apartment for sale in Nakuru Milimani"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              2-Bedroom Apartment in Milimani, Nakuru
            </h3>
            <p className="text-gray-600 mb-4">
              Perfect for first-time home buyers, this <strong>2-bedroom apartment for sale in Milimani, Nakuru</strong> 
              offers affordability, modern design, and quick access to schools and shopping centers.
            </p>
            <div className="flex items-center gap-2 mb-3 text-gray-700">
              <MapPin size={18} className="text-blue-600" /> Milimani, Nakuru
            </div>
            <a
              href="/apartments-for-sale-nakuru/2-bedroom-milimani"
              className="text-blue-600 font-medium hover:underline"
            >
              Book a Visit →
            </a>
          </div>
        </div>

        {/* Apartment 2 */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src={Apartment2}
            alt="Gated community apartments for sale in Nakuru near CBD"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Modern Gated Community Apartment
            </h3>
            <p className="text-gray-600 mb-4">
              Experience security and comfort in this <strong>gated community apartment for sale in Nakuru</strong>, 
              just 10 minutes from the CBD. Ideal for professionals and small families.
            </p>
            <div className="flex items-center gap-2 mb-3 text-gray-700">
              <MapPin size={18} className="text-blue-600" /> Near Nakuru CBD
            </div>
            <a
              href="/apartments-for-sale-nakuru/gated-community"
              className="text-blue-600 font-medium hover:underline"
            >
              Schedule a Viewing →
            </a>
          </div>
        </div>

        {/* Apartment 3 */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <img
            src={Apartment3}
            alt="Affordable 3-bedroom apartment for sale in Section 58 Nakuru"
            className="w-full h-56 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              Spacious 3-Bedroom Apartment in Section 58
            </h3>
            <p className="text-gray-600 mb-4">
              This <strong>affordable 3-bedroom apartment for sale in Section 58, Nakuru</strong> 
              is perfect for growing families. Spacious layout, modern finishes, and located in a safe estate.
            </p>
            <div className="flex items-center gap-2 mb-3 text-gray-700">
              <MapPin size={18} className="text-blue-600" /> Section 58, Nakuru
            </div>
            <a
              href="/apartments-for-sale-nakuru/3-bedroom-section-58"
              className="text-blue-600 font-medium hover:underline"
            >
              Inquire Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedApartments;