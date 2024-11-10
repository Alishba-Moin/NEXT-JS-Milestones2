import Image from 'next/image';
import { FaMoneyCheckAlt, FaAward, FaGlobe } from 'react-icons/fa'; 

export default function About() {
  return (
    <>
      {/* About Start */}
      <div className="w-full p-10">
        <div className="max-w-screen-xl mx-auto pt-10">
          <div className="flex flex-wrap">
            {/* Left Section (Image) */}
            <div className="lg:w-1/2 w-full">
              <div className="relative min-h-screen">
                <Image
                  className="absolute inset-0 w-full h-full object-cover shadow-lg"
                  src="/img/about.jpg"
                  alt="About Us"
                  layout="fill"
                />
              </div>
            </div>

            {/* Right Section (Text) */}
            <div className="lg:w-1/2 w-full pt-5 lg:pt-0 px-4 lg:px-10">
              <div className="bg-white p-6 lg:p-8 my-5 rounded-lg shadow-lg">
                <h4 className="text-teal-600 uppercase font-bold tracking-wider mb-4 text-4xl">
                  About Us
                </h4>
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
                  We Provide Best Tour Packages Within Your Budget
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image 
                      className="w-full h-auto" 
                      src="/img/about-1.jpg" 
                      alt="About Image 1" 
                      width={500} 
                      height={500} 
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <Image 
                      className="w-full h-auto" 
                      src="/img/about-2.jpg" 
                      alt="About Image 2" 
                      width={500} 
                      height={500} 
                    />
                  </div>
                </div>
                <a href="/contact" className="bg-teal-600 py-3 px-6 text-white font-semibold rounded-md shadow-md hover:bg-teal-400 transition duration-300 ease-in-out">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="w-full pb-5">
        <div className="max-w-screen-xl mx-auto pb-5">
          <div className="flex flex-wrap">
            {/* Competitive Pricing */}
            <div className="md:w-1/3 w-full mb-4 lg:mb-0">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center bg-teal-600 mr-3" style={{ height: '100px', width: '100px' }}>
                  <FaMoneyCheckAlt className="text-white text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-xl font-semibold text-gray-800">Competitive Pricing</h5>
                  <p className="text-gray-600">We offer budget-friendly travel packages with competitive rates, ensuring the best value for your money on all types of trips.</p>
                </div>
              </div>
            </div>

            {/* Best Services */}
            <div className="md:w-1/3 w-full mb-4 lg:mb-0">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center bg-teal-600 mr-3" style={{ height: '100px', width: '100px' }}>
                  <FaAward className="text-white text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-xl font-semibold text-gray-800">Best Services</h5>
                  <p className="text-gray-600">Expect exceptional service with personalized itineraries and 24/7 support for a seamless and memorable travel experience.</p>
                </div>
              </div>
            </div>

            {/* Worldwide Coverage */}
            <div className="md:w-1/3 w-full mb-4 lg:mb-0">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center bg-teal-600 mr-3" style={{ height: '100px', width: '100px' }}>
                  <FaGlobe className="text-white text-3xl" />
                </div>
                <div className="flex flex-col">
                  <h5 className="text-xl font-semibold text-gray-800">Worldwide Coverage</h5>
                  <p className="text-gray-600">Explore exclusive destinations and iconic landmarks worldwide, with coverage that takes you wherever you want to go.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
}
