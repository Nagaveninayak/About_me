import React, { useRef } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview/Overview";

function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className="content">
        <Navbar
          aboutRef={aboutRef}
          projectRef={projectRef}
          contactRef={contactRef}
          skillRef={skillRef}
        />
        <div className="flex flex-row  mb-5">
          <nav className="text-white lg:basis-2/12 text-center lg:inline hidden">Left Side</nav>
          <section className="lg:basis-8/12 lg:inline px-5 lg:px-0">
            <Overview
              aboutRef={aboutRef}
              projectRef={projectRef}
              contactRef={contactRef}
              skillRef={skillRef}
            />
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
