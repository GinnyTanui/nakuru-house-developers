import { useState } from "react";
import { Home, Building2, Info, Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-start p-4 gap-4 text-gray-700 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center gap-2 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} /> Home
              </a>
            </li>
            <li>
              <a
                href="/apartments-for-sale-nakuru"
                className="flex items-center gap-2 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <Building2 size={18} /> Apartments
              </a>
            </li>
            <li>
              <a
                href="/about-nakuru-housing-developers"
                className="flex items-center gap-2 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <Info size={18} /> About
              </a>
            </li>
            <li>
              <a
                href="/contact-nakuru-developers"
                className="flex items-center gap-2 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                <Phone size={18} /> Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
