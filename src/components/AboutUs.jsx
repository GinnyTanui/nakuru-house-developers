import { Users, Award, MapPin } from "lucide-react";
import AboutImage from "../images/About.jpg"; // Example image

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 lg:px-12 bg-gray-50 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
    >
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={AboutImage}
          alt="Nakuru real estate development - modern apartments"
          className="rounded-2xl shadow-lg w-full max-w-md md:max-w-full object-cover"
        />
      </div>

      {/* Right Side: Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          About Nakuru Housing Developers
        </h2>

        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
          At <strong>Nakuru Housing Developers</strong>, we specialize in
          creating high-quality <em>apartments for sale in Nakuru</em> that blend
          modern design, affordability, and convenience. Our mission is to make
          home ownership in Nakuru accessible to families, young professionals,
          and investors seeking long-term value.
        </p>

        <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
          With years of experience in the <em>real estate market in Nakuru</em>,
          we have successfully completed multiple housing projects in prime
          areas like Milimani, Kabarak, and Section 58. We focus on delivering
          homes with thoughtful layouts, secure neighborhoods, and proximity to
          schools, hospitals, and shopping centers.
        </p>

        {/* Highlights */}
        <ul className="space-y-3 text-gray-800 font-medium">
          <li className="flex items-center justify-center md:justify-start gap-2">
            <Users className="text-blue-600 flex-shrink-0" size={20} />
            <span>
              Trusted by over <strong>200 happy homeowners</strong> in Nakuru
            </span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            <Award className="text-blue-600 flex-shrink-0" size={20} />
            <span>
              Recognized for <strong>quality and affordability</strong> in housing
            </span>
          </li>
          <li className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="text-blue-600 flex-shrink-0" size={20} />
            <span>
              Projects in <strong>Milimani, Section 58, Kabarak</strong> & more
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
