// import codingImage from "../../public/images/codeImage.jpg";
import Image from "next/image";
import { FancyButton } from "./FancyButton";
import { BashCard } from "./bashCard";

//TODO: ADD A VIDEO INSTEAD OF IMAGE
//TODO: or make like this https://in.pinterest.com/pin/1970393579758271/
interface ICards {
  projectInfo: {
    title: string;
    description: string;
    projectLink: string;
    tools: {
      mainTitle: string;
      description: string;
    }[];
  };
}

export function Cards({ projectInfo }: ICards) {
  return (
    <div className=" my-5 rounded-lg border-2 py-1 border-transparent ">
      <section className="flex flex-row justify-between gap-x-4">
        <div className="basis-2/4">
          <FancyButton
            title={projectInfo.title}
            description={projectInfo.description}
            buttonLink={projectInfo.projectLink}
          />
        </div>
        <div className="basis-2/4">
          <BashCard title="Todo List" tools={projectInfo.tools} />
        </div>
      </section>
    </div>
  );
}
