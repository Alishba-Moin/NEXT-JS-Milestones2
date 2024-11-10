import Image from "next/image";
import About from "./about/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Profile Image */}
        <div className="profile-image-container">
          <div className="image-wrapper">
            <Image
              src="/img/img1.jpg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="hero-heading">
          Welcome to My Portfolio
        </h1>
        <p className="hero-description">
        Hi, I&apos;m Alishba Moin, a web developer passionate about creating beautiful and functional websites.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="hero-button"
          >
            Learn More About Me
          </a>
        </div>
      </div>

      {/* Sections */}
      <section className="section-about">
        <About />
      </section>
      <section className="section-skills">
        <Skills />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Alishba Moin. All rights reserved.</p>
          <p className="small-text">Designed & Developed by Alishba Moin</p>
        </div>
      </footer>
    </div>
  );
}
