import { ABOUT, ABOUT_MAP, ATTRIBUTES } from "@/constants/EducationConstants";
import Image from "next/image";
import { useState } from "react";

export function Education() {
  const [activeNav, setActiveNav] = useState(ABOUT[0]);
  const [currentNav, setCurrentNav] = useState<any>(ATTRIBUTES);

  const handleButtonClick = (title: string) => {
    setActiveNav(title);
    setCurrentNav(ABOUT_MAP[title as keyof typeof ABOUT_MAP]);
  };

  return (
    <div className=" bg-gradient-to-r from-cardGreen/95 to-cardDarkGreen/95 my-5 p-5 rounded-lg backdrop-blur-[5px]">
      <header>
        <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">
          About Me
        </h1>
      </header>
      <nav className="flex flex-row justify-start gap-x-10 mt-4">
        {ABOUT.map((title, index) => {
          const isActive = title === activeNav;
          return (
            <button
              onClick={() => handleButtonClick(title)}
              className={`rounded-full cursor-pointer text-white px-5 py-2 bg-buttonInital ${isActive
                ? "bg-buttonHover text-goldenColor border-goldenColor"
                : "hover:bg-buttonHover hover:text-goldenColor hover:border-goldenColor"
                } border-2 border-buttonInital text-bold`}
              key={index}
            >
              {title}
            </button>
          );
        })}
      </nav>
      <section className="mt-10">
        {currentNav === ATTRIBUTES && (
          <div className="grid grid-cols-2 gap-5">
            <section className="">
              {ATTRIBUTES.map((attribute, index) => {
                return (
                  <div className="mb-4" key={index}>
                    <div className="mb-2 flex flex-row justify-start gap-x-5 ">
                      <h1 className="text-tableText font-semibold basis-1/3">
                        {attribute.title}
                      </h1>
                      <p className="text-white font-semibold basis-2/3">
                        {attribute.value}
                      </p>
                    </div>
                    <div className="border-b border-attdivider border-solid"></div>
                  </div>
                );
              })}
            </section>
            <section></section>
          </div>
        )}
        {activeNav === "Education" && (
          <section className="">
            {currentNav.map((items: any, index: number) => {
              return (
                <div className="mb-4" key={index}>
                  <h1 className="text-white font-extrabold text-lg mb-1">
                    {items.title}
                  </h1>
                  <p className="text-white font-medium">
                    {items.value}{" "}
                    <span className="text-goldenColor font-semibold">
                      {" "}
                      {items.place}
                    </span>
                  </p>
                  <p className="text-white font-medium">{items.year}</p>
                  <div className="border-b border-attdivider border-solid mt-2"></div>
                </div>
              );
            })}
          </section>
        )}
        {activeNav === "Work" && (
          <section className="">
            {currentNav.map((items: any, index: number) => {
              return (
                <div className="mb-4" key={index}>
                  <h1 className="text-white font-extrabold text-lg mb-1">
                    {items.title}
                  </h1>
                  <p className="text-white font-medium">{items.value}</p>
                  <span className="text-goldenColor font-semibold">
                    {items.place}
                  </span>
                  <p className="text-white font-medium">{items.year}</p>
                  <div className="border-b border-attdivider border-solid mt-2"></div>
                </div>
              );
            })}
          </section>
        )}
        {activeNav === "Hobbies" && (
          <section className="">
            {currentNav.map((items: any, index: number) => {
              return (
                <div className="mb-4" key={index}>
                  <h1 className="text-white font-extrabold text-lg mb-1">
                    {items.title}
                  </h1>
                  <p className="text-white font-medium">{items.description}</p>
                  <div className="border-b border-attdivider border-solid mt-2"></div>
                </div>
              );
            })}
          </section>
        )}
      </section>
    </div>
  );
}
