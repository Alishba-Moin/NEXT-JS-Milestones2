import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const about = {
  title: "About Me",
  description:
    "I'm a passionate IT student specializing in Artificial Intelligence, Web 3.0, and Metaverse technologies. I'm eager to apply my academic knowledge to create innovative solutions in the tech industry.",
  contactInfo: [
    { icon: <FaPhoneAlt />, label: "Phone", value: "+92 317 245 567" },
    { icon: <FaEnvelope />, label: "Email", value: "alishbamoin797@gmail.com" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Hyderabad, Sindh" },
  ],
};

export default function About() {
  return (
    <div className="about-section">
      <div className="about-container">
        
        {/* Profile Image Section */}
        <div className="profile-image">
          <Image
            src="/img/img1.jpg" 
            alt="Alishba Moin"
            width={300}  
            height={500} 
            className="object-cover"
          />
        </div>

        {/* About Info Section */}
        <div className="about-info">
          <h2 className="about-title">{about.title}</h2>
          <p className="about-description">{about.description}</p>

          {/* Contact Info Section */}
          <div className="contact-info">
            <ul className="contact-info-list">
              {about.contactInfo.map((item, index) => (
                <li key={index} className="contact-info-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <p className="contact-label">{item.label}</p>
                    <p className="contact-value">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Link to Skills Page */}
          <div>
            <Link href="/skills" className="skills-link">
              See my Skills
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
