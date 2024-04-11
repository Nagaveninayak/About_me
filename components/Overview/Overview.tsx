import React from "react";
import { Education } from "./Education";
import { Introduction } from "./Introduction";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { RefProps } from "@/Interface";

export function Overview({ aboutRef, projectRef, contactRef }: any) {         
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
