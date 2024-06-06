import React from "react";
import { Education } from "./Education";
import { Introduction } from "./Introduction";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Resume } from "./Resume";
import { RefProps } from "@/Interface";

export function Overview({ aboutRef, projectRef, contactRef, skillRef }: any) {
  return (
    <div className="flex flex-col mt-24">
      <Introduction />
      <div ref={aboutRef}>
        <Education />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Resume />
      </div>
    </div>
  );
}
