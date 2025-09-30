import { Home, Building2, Info, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo / Brand */}
      <a
        href="/"
        className="flex items-center gap-2 text-xl font-bold text-blue-700"
        aria-label="Nakuru Housing Developers Homepage"
      >
        <Building2 className="text-blue-600" />
        Nakuru Housing Developers
      </a>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <a
            href="/"
            className="hover:text-blue-600 transition"
            aria-label="Apartments for Sale in Nakuru Homepage"
          >
            <Home className="inline mr-1" size={18} />
            Home
          </a>
        </li>
        <li>
          <a
            href="/apartments-for-sale-nakuru"
            className="hover:text-blue-600 transition"
            aria-label="View Apartments for Sale in Nakuru"
          >
            <Building2 className="inline mr-1" size={18} />
            Apartments
          </a>
        </li>
        <li>
          <a
            href="/about-nakuru-housing-developers"
            className="hover:text-blue-600 transition"
            aria-label="About Nakuru Housing Developers"
          >
            <Info className="inline mr-1" size={18} />
            About
          </a>
        </li>
        <li>
          <a
            href="/contact-nakuru-developers"
            className="hover:text-blue-600 transition"
            aria-label="Contact Nakuru Housing Developers"
          >
            <Phone className="inline mr-1" size={18} />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;