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
    <div className="team-container">
      <div className="max-w-screen-xl mx-auto pt-5 pb-3 px-4">
        <div className="team-header">
          <h4>Guides</h4>
          <h1>Our Travel Guides</h1>
        </div>

        {/* Centered grid layout */}
        <div className="team-grid">
          {teamData.map((guide, index) => (
            <div key={index} className="team-card">
              <div className="team-image-wrapper">
                <Image
                  className="object-cover w-full h-full"
                  src={guide.image}
                  alt={guide.name}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                />
                <div className="social-overlay">
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <FaTwitter />
                    </a>
                    <a href="#" className="social-icon">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="social-icon">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="social-icon">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
              <div className="team-card-body">
                <h5>{guide.name}</h5>
                <p>{guide.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
