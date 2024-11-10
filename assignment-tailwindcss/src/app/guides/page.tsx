import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const teamData = [
  { name: 'John Doe', designation: 'Tour Guide', image: '/img/team-1.jpg' },
  { name: 'Jane Smith', designation: 'City Guide', image: '/img/team-2.jpg' },
  { name: 'Michael Johnson', designation: 'Adventure Guide', image: '/img/team-3.jpg' },
  { name: 'Emily Davis', designation: 'Historical Guide', image: '/img/team-4.jpg' },
  { name: 'David Brown', designation: 'Cultural Guide', image: '/img/team-5.jpg' },
  { name: 'Sophia Wilson', designation: 'Nature Guide', image: '/img/team-6.jpg' },
  { name: 'James Lee', designation: 'Food Guide', image: '/img/team-7.jpg' },
  { name: 'Lily Johnson', designation: 'Shopping Guide', image: '/img/team-8.jpg' },
];

const Team = () => {
  return (
    <div className="py-5">
      <div className="max-w-screen-xl mx-auto pt-5 pb-3 px-4">
        <div className="text-center mb-3 pb-3">
          <h4 className="text-teal-600 uppercase tracking-widest text-lg font-bold mb-2">Guides</h4>
          <h1 className="text-gray-800 font-extrabold tracking-wider mb-4 text-4xl">Our Travel Guides</h1>
        </div>
        
        {/* Centered grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamData.map((guide, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative group">
                <div className="w-full h-72 relative">
                  <Image
                    className="object-cover w-full h-full"
                    src={guide.image}
                    alt={guide.name}
                    fill
                  />
                </div>

                {/* Social icons - initially hidden, appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300 ease-in-out">
                  <div className="flex space-x-3">
                    <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out" href="#">
                      <FaTwitter />
                    </a>
                    <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out" href="#">
                      <FaFacebookF />
                    </a>
                    <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out" href="#">
                      <FaLinkedinIn />
                    </a>
                    <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white transition-all duration-300 ease-in-out" href="#">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center py-4">
                <h5 className="text-black font-semibold">{guide.name}</h5>
                <p className="m-0 text-gray-600">{guide.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
