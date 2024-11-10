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
    <div className="contact-section">
      <div className="contact-container">

        {/* Contact Info */}
        <div className="contact-info">
          <ul className="contact-info-list">
            {info.map((item, index) => (
              <li key={index} className="contact-info-item">
                <div className="contact-info-icon">
                  {item.icon}
                </div>
                <div>
                  <p className="contact-info-title">{item.title}</p>
                  <h3 className="contact-info-description">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3 className="contact-form-title">Let&apos;s work together!</h3>

          <div className="contact-form-grid">
            <input
              type="text"
              placeholder="Firstname"
              className="contact-input"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="contact-input"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="contact-input"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="contact-input"
            />
          </div>

          <textarea
            className="contact-textarea"
            placeholder="Type your message here"
          ></textarea>

          <button type="submit" className="contact-button">
            Send message
          </button>
        </div>

      </div>
    </div>
  );
}
