// Footer.js
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-gray-400 py-5 px-4 sm:px-6 lg:px-12 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pt-10">
          {/* Branding and About Section */}
          <div className="mb-5">
            <a href="#" className="navbar-brand">
              <h1 className="text-teal-400 text-2xl font-extrabold">
                <span className="text-white">TRAVEL</span>ER
              </h1>
            </a>
            <p className="text-gray-400">
              Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore
              rebum lorem ipsum dolor. No sed vero lorem dolor dolor
            </p>
            <h6 className="text-white text-sm uppercase mt-4 mb-3 tracking-widest">
              Follow Us
            </h6>
            <div className="flex space-x-2">
              <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white" href="/https://github.com/Alishba-Moin">
              <FaGithub/>
              </a>
              <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white"  href="/https://www.facebook.com/">
              <FaFacebookF />
              </a>
              <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white" href="/https://www.linkedin.com/in/alishba-moin/">
              <FaLinkedinIn />
              </a>
              <a className="border border-teal-400 p-2 rounded-full text-teal-400 hover:bg-teal-400 hover:text-white" href="/https://www.instagram.com/alish.bamoin/">
              <FaInstagram />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-5">
            <h5 className="text-white text-sm uppercase mb-4 tracking-widest">
              Our Services
            </h5>
            <div className="space-y-2">
              {["About", "Destination", "Services", "Packages", "Guides"].map((item) => (
                <a key={item} className="text-gray-400 flex items-center" href="#">
                  <FaAngleRight className="mr-2" />{item}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="mb-5">
            <h5 className="text-white text-sm uppercase mb-4 tracking-widest">
              Useful Links
            </h5>
            <div className="space-y-2">
              {["About", "Destination", "Services", "Packages", "Guides"].map((item) => (
                <a key={item} className="text-gray-400 flex items-center" href="#">
                  <FaAngleRight className="mr-2" />{item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-5">
            <h5 className="text-white text-sm uppercase mb-4 tracking-widest">
              Contact Us
            </h5>
            <p className="text-gray-400">
              <FaMapMarkerAlt className="mr-2" />Hyderabad, Sindh
            </p>
            <p className="text-gray-400">
              <FaPhoneAlt className="mr-2" />+012 345 67890
            </p>
            <p className="text-gray-400">
              <FaEnvelope className="mr-2" />alishbamoin797@gmail.com
            </p>
            <h6 className="text-white text-sm uppercase mt-4 mb-3 tracking-widest">
              Newsletter
            </h6>
            <div className="flex">
              <input
                type="text"
                className="flex-grow border border-gray-700 bg-gray-800 text-white py-2 px-4 rounded-l-lg focus:outline-none"
                placeholder="Your Email"
              />
              <button className="bg-teal-400 text-white px-4 rounded-r-lg hover:bg-teal-500">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-black text-gray-400 border-t border-gray-700 py-4 px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">
            Copyright &copy; <a href="#" className="text-teal-400">Traveller</a>. All Rights Reserved.
          </p>
          <p className="text-center md:text-right">
            Designed by <a href="https://www.linkedin.com/in/alishba-moin/" className="text-teal-400">Alishba Moin</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
