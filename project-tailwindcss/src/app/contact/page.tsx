"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone-no",
    description: "+92 317 245 567",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "alishbamoin797@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Hyderabad, Sindh",
  },
];

export default function Contact() {
  return (
    <div className="px-6 py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="flex flex-col xl:flex-row gap-[30px]">

        {/* Contact Info */}
        <div className="flex flex-1 items-center xl:justify-start mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-pink-500 rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl text-white">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex-1 xl:w-[70%]">
          <form className=" max-w-screen-lg mx-auto flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl">
            <h3 className="text-3xl font-extrabold text-accent mb-6">Let's work together!</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Firstname"
                className="p-3 bg-transparent border-2 border-white/30 text-white rounded-md focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                placeholder="Lastname"
                className="p-3 bg-transparent border-2 border-white/30 text-white rounded-md focus:outline-none focus:border-purple-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 bg-transparent border-2 border-white/30 text-white rounded-md focus:outline-none focus:border-purple-500"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="p-3 bg-transparent border-2 border-white/30 text-white rounded-md focus:outline-none focus:border-purple-500"
              />
            </div>

            <textarea
              className="p-3 h-[150px] bg-transparent border-2 border-white/30 text-white rounded-md focus:outline-none focus:border-purple-500"
              placeholder="Type your message here"
            ></textarea>

            <button
              type="submit"
              className="mt-4 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
              Send message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
