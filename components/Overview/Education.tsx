import { IMAGE_CONSTANTS } from "@/constants/EducationConstants";
import Image from "next/image";

export function Education() {
  return (
    <div className=" bg-gradient-to-r from-cardGreen to-cardDarkGreen my-5 p-5 rounded-lg">
      <header>
        <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">
          About Me
        </h1>
      </header>
      <section>
        {/* <nav className="flex flex-row justify-evenly mt-4">
        {
            IMAGE_CONSTANTS.map((items) => {
                return <div className="">
                  <Image src={items.imagePath} alt="title" className="w-16 h-16 rounded-full  hover:ring-[5px]  hover:ring-brownHover/50 hover:ring-offset-2 cursor-pointer"/>
                </div>
            })
        }
        </nav> */}
        <p className="text-sm font-semibold text-left text-white mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </section>
    </div>
  );
}
