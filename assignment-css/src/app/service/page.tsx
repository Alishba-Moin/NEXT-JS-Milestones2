import { FaRoute, FaTicketAlt, FaHotel, FaCar, FaPlane, FaSuitcase } from 'react-icons/fa';

const Service = () => {
  return (
    <div className="service-section">
      <div className="container">
        <div className="service-header">
          <h4 className="service-subtitle">Our Services</h4>
          <h1 className="service-title">Explore Our Premium Tours & Travel Services</h1>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <FaRoute className="service-icon" />
            <h5 className="service-name">Guided Tours</h5>
            <p className="service-description">Join experienced local guides for immersive tours in various destinations.</p>
          </div>
          <div className="service-card">
            <FaTicketAlt className="service-icon" />
            <h5 className="service-name">Event Tickets</h5>
            <p className="service-description">Book tickets for concerts, sports events, festivals, and more with ease.</p>
          </div>
          <div className="service-card">
            <FaHotel className="service-icon" />
            <h5 className="service-name">Luxury Stays</h5>
            <p className="service-description">Discover and book top-rated hotels, resorts, and luxury accommodations for an unforgettable stay.</p>
          </div>
          <div className="service-card">
            <FaSuitcase className="service-icon" />
            <h5 className="service-name">Tour Packages</h5>
            <p className="service-description">Find the best tour packages to explore popular tourist destinations.</p>
          </div>
          <div className="service-card">
            <FaCar className="service-icon" />
            <h5 className="service-name">Car Rental</h5>
            <p className="service-description">Explore flexible car rental options. Drive around at your own pace with affordable rates.</p>
          </div>
          <div className="service-card">
            <FaPlane className="service-icon" />
            <h5 className="service-name">Flight Booking</h5>
            <p className="service-description">Book flights easily at competitive prices to any destination worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
