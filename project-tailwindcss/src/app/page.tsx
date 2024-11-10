import Image from "next/image"
import About from "./about/page";
import Skills from "./skills/page";


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center flex-col pt-12 pb-8 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Profile Image */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-10">
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white shadow-lg">
            <Image
              src="/img/img1.jpg" 
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Hi, I'm Alishba Moin, a web developer passionate about creating beautiful and functional websites.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            Learn More About Me
          </a>
        </div>
      </div>
<section>
<About/>
</section>
<section>
  <Skills/>
</section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Alishba Moin. All rights reserved.</p>
          <p className="text-sm text-gray-400">Designed & Developed by Alishba Moin</p>
        </div>
      </footer>
    </div>
  );
}

