import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaAngleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-grid">
          {/* Branding and About Section */}
          <div className="footer-branding">
            <a href="#" className="navbar-brand">
              <h1>
                <span>TRAVEL</span>ER
              </h1>
            </a>
            <p>
              Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet labore
              rebum lorem ipsum dolor. No sed vero lorem dolor dolor
            </p>
            <h6>Follow Us</h6>
            <div className="footer-social">
              <a href="https://github.com/Alishba-Moin"><FaGithub /></a>
              <a href="https://www.facebook.com/"><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/alishba-moin/"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/alish.bamoin/"><FaInstagram /></a>
            </div>
          </div>

          {/* Services Section */}
          <div className="footer-links">
            <h5>Our Services</h5>
            <div>
              {["About", "Destination", "Services", "Packages", "Guides"].map((item) => (
                <a key={item} href="#">
                  <FaAngleRight className="icon" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="footer-links">
            <h5>Useful Links</h5>
            <div>
              {["About", "Destination", "Services", "Packages", "Guides"].map((item) => (
                <a key={item} href="#">
                  <FaAngleRight className="icon" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h5>Contact Us</h5>
            <p><FaMapMarkerAlt /> Hyderabad, Sindh</p>
            <p><FaPhoneAlt /> +012 345 67890</p>
            <p><FaEnvelope /> alishbamoin797@gmail.com</p>
            <h6>Newsletter</h6>
            <div className="footer-newsletter">
              <input type="text" placeholder="Your Email" />
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div>
          <p>
            Copyright &copy; <a href="#" className="text-teal-600">Traveller</a>. All Rights Reserved.
          </p>
          <p>
            Designed by <a href="https://www.linkedin.com/in/alishba-moin/" className="text-teal">Alishba Moin</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
