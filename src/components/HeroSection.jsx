import HeroImage from "../images/HeroImage.jpg";
import { Star, Quote } from "lucide-react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-[90vh]">
      {/* Background Hero Image */}
      <img
        src={HeroImage}
        alt="Modern apartments for sale in Nakuru"
        className="absolute inset-0 w-full h-full object-cover brightness-70"
      />

      {/* Content Overlay */}
     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white bg-black/40">
        {/* ========== SEO TITLE (H1) ========== */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Affordable Apartments for Sale in Nakuru
        </h1>

        {/* Meta-style supporting text */}
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Discover modern <strong>2 & 3-bedroom apartments in Nakuru</strong>. 
          Secure gated communities, prime locations like Milimani & Section 58, 
          and affordable pricing – all designed to help you find your dream home.
        </p>

        {/* CTA */}
        <a
          href="/apartments-for-sale-nakuru"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg font-medium transition"
        >
          View Available Apartments
        </a>

        {/* ========== Mini Testimonial ========== */}
        <div className="bg-white/90 text-gray-900 mt-8 max-w-lg p-4 rounded-xl shadow-md">
          <div className="flex items-center justify-center mb-2">
            <Star className="text-yellow-500" /> 
            <Star className="text-yellow-500" /> 
            <Star className="text-yellow-500" /> 
            <Star className="text-yellow-500" /> 
            <Star className="text-yellow-500" />
          </div>
          <p className="italic mb-2">
            "Buying my <strong>apartment in Nakuru</strong> was the best decision ever. 
            Safe neighborhood, modern design, and very affordable. Highly recommend!"
          </p>
          <div className="flex items-center justify-center gap-2 text-sm font-semibold">
            <Quote className="text-blue-600" size={16} /> 
            — Mary W., Homeowner in Nakuru
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;