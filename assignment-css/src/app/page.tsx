import About from "./about/page";
import Destinations from "./destination/page";
import Service from "./service/page";
import Packages from "./tourPackage/page";
import Team from "./guides/page";
import HeroSection from "../components/hero";

export default function Home() {
    return ( 
        <main>
            {/* Hero Section */}
            <section className="h-screen w-full">
                <HeroSection />
            </section>

            {/* About Section */}
            <section id="about">
                <About />
            </section>

            {/* Destinations Section */}
            <section id="destinations" className="py-6 bg-gray-100">
                <Destinations />
            </section>

            {/* Service Section */}
            <section id="service" className="py-6">
                <Service />
            </section>

            {/* Packages Section */}
            <section id="packages" className="py-6 bg-gray-100">
                <Packages />
            </section>

            {/* Team Section */}
            <section id="team" className="py-6">
                <Team />
            </section>
        </main>
    );
}
