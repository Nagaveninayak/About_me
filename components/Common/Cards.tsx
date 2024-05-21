// import codingImage from "../../public/images/codeImage.jpg";
import Image from "next/image";
import { FancyButton } from "./FancyButton";
import { BashCard } from "./bashCard";
import { TodoListTools } from "@/constants/ProjectConstants";

//TODO: ADD A VIDEO INSTEAD OF IMAGE
//TODO: or make like this https://in.pinterest.com/pin/1970393579758271/
export function Cards() {
  return (
    <div className=" my-5 p-5 rounded-lg border-2 py-1 border-transparent">
      <section className="flex flex-row justify-between gap-x-4">
        <div className="basis-2/4">
          <FancyButton title="Todo List" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad aut rerum velit excepturi nemo sunt hic possimus, dolore totam nulla consequatur impedit consectetur nobis nesciunt tempora vitae cum et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad aut rerum velit excepturi nemo sunt hic possimus, dolore totam nulla consequatur impedit consectetur nobis nesciunt tempora vitae cum et. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad aut rerum velit excepturi nemo sunt hic possimus, dolore totam nulla consequatur impedit consectetur nobis nesciunt tempora vitae cum et." buttonLink="https://github.com/Nagaveninayak/Todo-List" />
        </div>
        <div className="basis-2/4">
          <BashCard title="Todo List" tools={TodoListTools} />
        </div>
      </section>
    </div>
  );
}
