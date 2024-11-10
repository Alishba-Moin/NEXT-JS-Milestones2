import Image from 'next/image';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaStar } from 'react-icons/fa';

export default function Packages() {
  const packages = [
    {
      imgSrc: '/img/package-1.jpg',
      location: 'Thailand',
      duration: '3 days',
      persons: '2 Person',
      title: 'Discover amazing places of the world with us',
      rating: 4.5,
      reviews: 250,
      price: 350,
    },
    {
      imgSrc: '/img/package-2.jpg',
      location: 'Dubai',
      duration: '5 days',
      persons: '2 Person',
      title: 'Explore the iconic landmarks and desert of Dubai',
      rating: 4.8,
      reviews: 300,
      price: 450,
    },
    {
      imgSrc: '/img/package-3.jpg',
      location: 'Paris',
      duration: '7 days',
      persons: '2 Person',
      title: 'A Romantic Getaway in Paris',
      rating: 4.7,
      reviews: 400,
      price: 500,
    },
    {
      imgSrc: '/img/package-4.jpg',
      location: 'Japan',
      duration: '10 days',
      persons: '2 Person',
      title: 'Experience the beauty of Japan during Cherry Blossom Season',
      rating: 5.0,
      reviews: 320,
      price: 700,
    },
    {
      imgSrc: '/img/package-5.jpg',
      location: 'Italy',
      duration: '6 days',
      persons: '2 Person',
      title: 'Explore Italy\'s Cities: Rome, Florence, Venice',
      rating: 4.6,
      reviews: 280,
      price: 600,
    },
    {
      imgSrc: '/img/package-6.jpg',
      location: 'Australia',
      duration: '8 days',
      persons: '2 Person',
      title: 'Discover Australia\'s Great Barrier Reef and Sydney',
      rating: 4.9,
      reviews: 350,
      price: 800,
    },
  ];

  return (
    <div className="py-5 bg-gray-100">
      <div className="max-w-screen-xl mx-auto pt-5 pb-3 px-4">
        <div className="text-center mb-3 pb-3">
          <h4 className="text-teal-600 uppercase tracking-widest text-lg font-bold mb-2">Packages</h4>
          <h1 className="text-gray-800 font-extrabold tracking-wider mb-4 text-4xl">Perfect Tour Packages</h1>
        </div>
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
          {packages.map((pkg, index) => (
            <div key={index} className="package-card bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="w-full h-56 object-cover"
                src={pkg.imgSrc}
                alt={pkg.title}
                width={500}
                height={300}
              />
              <div className="p-4">
                <div className="flex justify-between mb-3 text-sm text-gray-500">
                  <small className="flex items-center">
                    <FaMapMarkerAlt className="package-info-icon" />
                    {pkg.location}
                  </small>
                  <small className="flex items-center">
                    <FaCalendarAlt className="package-info-icon" />
                    {pkg.duration}
                  </small>
                  <small className="flex items-center">
                    <FaUser className="package-info-icon" />
                    {pkg.persons}
                  </small>
                </div>
                
                <a className="package-card-title block font-semibold mb-2" href="#">
                  {pkg.title}
                </a>
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <h6 className="m-0 text-sm flex items-center">
                      <FaStar className="package-rating-star" />
                      {pkg.rating} <small className="ml-1">({pkg.reviews})</small>
                    </h6>
                    <h5 className="m-0 text-xl font-bold">${pkg.price}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
