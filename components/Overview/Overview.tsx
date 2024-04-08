import React, { useEffect, useRef } from "react";
import { Education } from "./Education";
import { Introduction } from "./Introduction";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { RefProps } from "@/Interface";

export function Overview({ aboutRef, projectRef, contactRef }: any) {
  console.log("🚀 ~ Overview ~ contactRef:", contactRef);
  console.log("🚀 ~ Overview ~ projectRef:", projectRef);
  console.log("🚀 ~ Overview ~ aboutRef:", aboutRef);

  const aboutSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  useEffect(() => {
    aboutRef = aboutSectionRef;
    console.log("🚀 ~ useEffect ~ aboutRef:", aboutRef)
    projectRef = projectSectionRef;
    contactRef = contactSectionRef;
  }, [aboutRef, projectRef, contactRef]);

  return (
    <div className="flex flex-col mt-24">
      <div ref={aboutRef}>
        <Introduction />
      </div>
      <Education />
      <div ref={projectRef}>
        <Projects />
      </div>
      <Skills />
      <Resume />
      <div ref={contactRef}>
        <Education />
      </div>
    </div>
  );
}
