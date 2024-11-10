import Image from 'next/image'
import { FaMoneyCheckAlt, FaAward, FaGlobe } from 'react-icons/fa';

export default function About() {
  return (
    <>
      {/* About Start */}
      <div className="about-container">
        <div className="about-inner">
          <div className="about-content">
            {/* Left Section (Image) */}
            <div className="about-image">
              <div className="image-wrapper">
              <Image
            className="main-image"
            src="/img/about.jpg"
            alt="About Us"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"   
          />
              </div>
            </div>

            {/* Right Section (Text) */}
            <div className="about-text">
              <div className="text-box">
                <h4 className="section-title">About Us</h4>
                <h1 className="main-heading">
                  We Provide Best Tour Packages Within Your Budget
                </h1>
                <p className="section-description">
                  Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo.
                </p>
                <div className="image-grid">
                  <div className="grid-item">
                    <Image 
                      className="grid-image" 
                      src="/img/about-1.jpg" 
                      alt="About Image 1" 
                      width={500} 
                      height={500} 
                    />
                  </div>
                  <div className="grid-item">
                    <Image 
                      className="grid-image" 
                      src="/img/about-2.jpg" 
                      alt="About Image 2" 
                      width={500} 
                      height={500} 
                    />
                  </div>
                </div>
                <a href="/contact" className="book-now-button">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Feature Start */}
      <div className="feature-section">
        <div className="feature-inner">
          <div className="feature-content">
            {/* Competitive Pricing */}
            <div className="feature-item">
              <div className="feature-icon-container">
                <FaMoneyCheckAlt className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Competitive Pricing</h5>
                <p className="feature-description">
                  We offer budget-friendly travel packages with competitive rates, ensuring the best value for your money on all types of trips.
                </p>
              </div>
            </div>

            {/* Best Services */}
            <div className="feature-item">
              <div className="feature-icon-container">
                <FaAward className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Best Services</h5>
                <p className="feature-description">
                  Expect exceptional service with personalized itineraries and 24/7 support for a seamless and memorable travel experience.
                </p>
              </div>
            </div>

            {/* Worldwide Coverage */}
            <div className="feature-item">
              <div className="feature-icon-container">
                <FaGlobe className="feature-icon" />
              </div>
              <div className="feature-text">
                <h5 className="feature-title">Worldwide Coverage</h5>
                <p className="feature-description">
                  Explore exclusive destinations and iconic landmarks worldwide, with coverage that takes you wherever you want to go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
}
