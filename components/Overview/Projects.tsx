import { IMAGE_CONSTANTS } from "@/constants/EducationConstants";
import Image from "next/image";
import { Cards } from "../Common/Cards";

export function Projects() {
    return (
        <div className=" bg-gradient-to-r from-cardGreen to-cardDarkGreen my-5 p-5 rounded-lg">
            <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">Projects / Gallery</h1>
            <section>
        <nav className="flex flex-row justify-evenly mt-4">
        {
            IMAGE_CONSTANTS.map((items) => {
                return <div className="">
                  <Image src={items.imagePath} alt="title" className="w-16 h-16 rounded-full  hover:ring-[5px]  hover:ring-brownHover/50 hover:ring-offset-2 cursor-pointer"/>
                </div>
            })
        }
        </nav>
       <Cards />
      </section>
        </div>
    )
}