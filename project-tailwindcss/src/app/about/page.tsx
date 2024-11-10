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
    <div className=" bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-8">
        {/* Profile Image Section */}
        <div className="flex-shrink-0 w-50 h-50 overflow-hidden shadow-lg">
          <Image
            src="/img/img1.jpg" 
            alt="Alishba Moin"
            width={300}  
            height={500} 
            className="object-cover"
          />
        </div>

        {/* About Info Section */}
        <div className="flex flex-col items-center xl:items-start gap-4 text-center xl:text-left">
          <h2 className="text-3xl font-bold">{about.title}</h2>
          <p className="max-w-2xl text-lg text-white/90">{about.description}</p>

          {/* Contact Info Section */}
          <div className="mt-6">
            <ul className="space-y-4">
              {about.contactInfo.map((item, index) => (
                <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                  <div className="text-purple-500 text-2xl">{item.icon}</div>
                  <div className="text-lg">
                    <p className="font-semibold">{item.label}</p>
                    <p>{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Link to Skills Page */}
          <div className="mt-6">
          <Link href="/skills" className="text-xl font-semibold  text-pink-500 hover:text-pink-700 hover:text-underline transition-all duration-300 ease-in-out transform hover:scale-105">
  See my Skills
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
