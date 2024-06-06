import { useState, useEffect } from "react";
import Image from "next/image";
import { Cards } from "../Common/Cards";
import { PROJECT_INFORMATION } from "@/constants/ProjectConstants";

export function Projects() {
  const [currentProject, setCurrentProject] = useState(PROJECT_INFORMATION[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // useEffect(() => {
  //     setAnimationKey(prevKey => prevKey + 1); // Increment key to trigger re-render
  // }, [currentProject]); // Dependency array includes currentProject

  return (
    <div className="bg-gradient-to-r from-cardGreen to-cardDarkGreen my-5 p-5 rounded-lg">
      <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">
        Projects / Gallery
      </h1>
      <section>
        <nav className="flex flex-row justify-start gap-x-10 mt-4">
          {PROJECT_INFORMATION.map((item, index) => {
            const isSelected = index === currentImageIndex;
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentProject(item);
                  setCurrentImageIndex(index);
                }}
                className={`rounded-full cursor-pointer text-white px-5 py-2 bg-buttonInital ${
                  isSelected
                    ? "bg-buttonHover text-goldenColor border-goldenColor"
                    : "hover:bg-buttonHover hover:text-goldenColor hover:border-goldenColor"
                } border-2 border-buttonInital text-bold`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>
        {/* <div key={animationKey} className="animate-[slideRightToLeft_1s_ease-in-out_forwards]">
                    <Cards projectInfo={currentProject.project} />
                </div> */}
        <Cards projectInfo={currentProject.project} />
      </section>
    </div>
  );
}
