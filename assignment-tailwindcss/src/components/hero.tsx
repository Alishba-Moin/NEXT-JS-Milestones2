import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image Section */}
      <div className="relative w-full min-h-screen">
        <Image
          src="/img/carousel.jpg"  
          alt="Travel Image"
          fill
          style={{ objectFit: 'cover' }} 
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-6 max-w-[900px]">
            <h4 className="text-white uppercase mb-3 font-bold">Tours & Travel</h4>
            <h1 className="text-5xl text-white mb-6 font-extrabold">Let&apos;s Discover The World Together</h1>
            {/* Button */}
            <a
              href="/contact"
              className="bg-teal-400 text-white font-semibold py-3 px-6 rounded-md mb-4 md:mb-6 text-xl hover:bg-teal-600 transition-all duration-300 ease-in-out"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
