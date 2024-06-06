import React, { useRef, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Overview } from "@/components/Overview/Overview";
import { ScrollTracker } from "@/components/ScrollTracker";

function HomePage() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [aboutRef, projectRef, contactRef, skillRef]);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
        skillRef={skillRef}
      />
      <div className="flex flex-row backdrop-blur-[5px] mb-5">
        <nav className="text-white  basis-2/12 text-center"> Left Side</nav>
        <section className="basis-8/12 ">
          <Overview
            aboutRef={aboutRef}
            projectRef={projectRef}
            contactRef={contactRef}
            skillRef={skillRef}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
