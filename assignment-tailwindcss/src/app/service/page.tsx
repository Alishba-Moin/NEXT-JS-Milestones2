// components/ServiceSection.js
import { FaRoute, FaTicketAlt, FaHotel, FaCar, FaPlane, FaSuitcase } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 pt-10 pb-6">
        <div className="text-center mb-8">
        <h4 className="text-teal-600 uppercase tracking-widest text-lg font-bold mb-2">Our Services</h4>
        <h1 className="text-gray-800 font-extrabold tracking-wider mb-4 text-4xl">Explore Our Premium Tours & Travel Services</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white text-center shadow-xl p-6">
            <FaRoute className="mx-auto text-4xl mb-4 text-teal-600" />
            <h5 className="text-xl font-semibold mb-2">Guided Tours</h5>
            <p className="text-gray-600">Join experienced local guides for immersive tours in various destinations.</p>
          </div>
          <div className="bg-white text-center shadow-xl p-6">
            <FaTicketAlt className="mx-auto text-4xl mb-4 text-teal-600" />
            <h5 className="text-xl font-semibold mb-2">Event Tickets</h5>
            <p className="text-gray-600">Book tickets for concerts, sports events, festivals, and more with ease.</p>
          </div>
          <div className="bg-white text-center shadow-xl p-6">
            <FaHotel className="mx-auto text-4xl mb-4 text-teal-600" />
            <h5 className="text-xl font-semibold mb-2">Luxury Stays</h5>
            <p className="text-gray-600">Discover and book top-rated hotels, resorts, and luxury accommodations that ensure a unforgettable stay..</p>
          </div>
          <div className="bg-white text-center shadow-xl p-6">
            <FaSuitcase   className="mx-auto text-4xl mb-4 text-teal-600" />
            <h5 className="text-xl font-semibold mb-2">Tour Packages</h5>
            <p className="text-gray-600">Find the best tour packages to explore popular tourist destinations.</p>
          </div>
          <div className="bg-white text-center shadow-xl p-6">
            <FaCar className="mx-auto text-4xl mb-4 text-teal-600" />
            <h5 className="text-xl font-semibold mb-2">Car Rental</h5>
            <p className="text-gray-600">Explore flexible car rental options. Drive around at your own pace with affordable rates.</p>
          </div>
          <div className="bg-white text-center  shadow-xl p-6">
            <FaPlane className="mx-auto text-4xl mb-4 text-teal-600" />
            <h5 className="text-xl font-semibold mb-2">Flight Booking</h5>
            <p className="text-gray-600">Book flights easily at competitive prices to any destination worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
