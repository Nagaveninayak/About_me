import { RefProps } from "@/Interface";
import React from "react";

export function Navbar({
  aboutRef,
  projectRef,
  contactRef,
  skillRef,
}: RefProps) {
  console.log(aboutRef);
  const scrollToRef = (ref: React.MutableRefObject<HTMLElement | null>) => {
    if (ref.current) {
      const offsetTop =
        ref.current.getBoundingClientRect().top + window.pageYOffset - 50;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="z-10 w-full fixed-nav">
      <div className="flex flex-row justify-between text-blue text-white my-3.5 mx-5">
        <div>Nagaveni Nayak</div>
        <div className="grid grid-cols-4 gap-x-10 text-white mr-10">
          <a href="#about" onClick={() => scrollToRef(aboutRef)}>
            about
          </a>
          <a href="#project" onClick={() => scrollToRef(projectRef)}>
            project
          </a>
          <a href="#project" onClick={() => scrollToRef(skillRef)}>
            skills
          </a>
          <a href="#contact" onClick={() => scrollToRef(contactRef)}>
            resume
          </a>
        </div>
      </div>
      <div className=" border-b-2 border-white mt-1 "></div>
    </nav>
  );
}
