import { useState, useEffect } from "react";
import Image from "next/image";
import { Cards } from "../Common/Cards";
import { PROJECT_INFORMATION } from "@/constants/ProjectConstants";

export function Projects() {
  const [currentProject, setCurrentProject] = useState(PROJECT_INFORMATION[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (item: any, index: number) => {
    setIsAnimating(true);
    setCurrentProject(item);
    setCurrentImageIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Duration of the animation
  };

  return (
    <div className="bg-gradient-to-r from-cardGreen/95 to-cardDarkGreen/95 my-5 p-5 rounded-lg backdrop-blur-[5px] relative h-full">
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
                onClick={() => handleButtonClick(item, index)}
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
        <div className={`${isAnimating ? "content-enter " : ""}`}>
          <Cards projectInfo={currentProject.project} />
        </div>
      </section>
    </div>
  );
}
