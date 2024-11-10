import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Hero Image Section */}
      <div className="hero-image">
        <Image
          src="/img/carousel.jpg"  
          alt="Travel Image"
          fill
          style={{ objectFit: 'cover' }} 
          className="hero-image"
          priority
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h4 className="hero-title">Tours & Travel</h4>
            <h1 className="hero-main-title">Let&apos;s Discover The World Together</h1>

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
