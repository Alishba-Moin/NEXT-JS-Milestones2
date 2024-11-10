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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { img: 'destination-1.jpg', location: 'United States' },
            { img: 'destination-2.jpg', location: 'United Kingdom' },
            { img: 'destination-3.jpg', location: 'Australia' },
            { img: 'destination-4.jpg', location: 'India' },
            { img: 'destination-5.jpg', location: 'South Africa' },
            { img: 'destination-6.jpg', location: 'Indonesia' },
          ].map((destination, index) => (
            <div key={index} className="destination-card mb-4">
              <div className="relative w-full h-56 sm:h-72 lg:h-80">
                <Image
                  className="destination-image"
                  src={`/img/${destination.img}`}
                  alt={destination.location}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                />
              </div>
              
              <a className="destination-overlay">
                <h5 className="destination-title">
                  {destination.location}
                </h5>
                <p className="destination-subtitle">100+ Cities</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
