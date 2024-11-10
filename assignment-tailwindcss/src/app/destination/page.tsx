import Image from 'next/image';

const Destinations = () => {
  return (
    <div className="w-full py-5 bg-gray-100">
      <div className="max-w-screen-xl mx-auto pt-5 pb-3 px-4">
        <div className="text-center mb-3 pb-3">
          <h6 className="text-teal-600 uppercase tracking-widest text-lg font-bold mb-2">
            Destination
          </h6>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            Explore Top Destinations
          </h1>
        </div>

        {/* Grid Layout for Destinations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: 'destination-1.jpg', location: 'United States' },
            { img: 'destination-2.jpg', location: 'United Kingdom' },
            { img: 'destination-3.jpg', location: 'Australia' },
            { img: 'destination-4.jpg', location: 'India' },
            { img: 'destination-5.jpg', location: 'South Africa' },
            { img: 'destination-6.jpg', location: 'Indonesia' },
          ].map((destination, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 mb-4"
            >
              {/* Destination Item */}
              <div className="relative w-full h-56 sm:h-72 lg:h-80">
                <Image
                  className="absolute inset-0 w-full h-full object-cover transform transition duration-500 ease-in-out group-hover:scale-110"
                  src={`/img/${destination.img}`}
                  alt={destination.location}
                  fill
                />
              </div>
              
              {/* Overlay with text */}
              <a className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white font-bold text-xl lg:text-2xl mb-1">
                  {destination.location}
                </h5>
                <p className="text-gray-200 text-sm lg:text-base ">100+ Cities</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
