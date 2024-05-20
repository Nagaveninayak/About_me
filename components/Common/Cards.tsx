import codingImage from "../../public/images/codingImage.jpeg";
import Image from "next/image";

//TODO: ADD A VIDEO INSTEAD OF IMAGE
//TODO: or make like this https://in.pinterest.com/pin/1970393579758271/
export function Cards() {
  return (
    <div className=" my-5 p-5 rounded-lg border-2 py-1 border-greenGrey/50">
      <header className="flex flex-row justify-between gap-x-4">
        <Image
          src={codingImage}
          alt="image"
          className="w-48 h-48 rounded-md basis-1/4"
        />
        <div className="basis-3/4">
          <h1 className="text-white font-extrabold text-2xl ">
            Todo List
          </h1>
          <p  className="text-white font-normal text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad aut rerum velit excepturi nemo sunt hic possimus, dolore totam nulla consequatur impedit consectetur nobis nesciunt tempora vitae cum et.
          </p>
          <p  className="text-white font-normal text-base ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ad aut rerum velit excepturi nemo sunt hic possimus, dolore totam nulla consequatur impedit consectetur nobis nesciunt tempora vitae cum et.
          </p>
        </div>
      </header>
      <section className="mt-4">
        <div className="flex flex-row gap-x-4">
            <span className="text-white font-bold text-lg ">Tools Used: </span>
            <span className="text-white font-normal text-lg ">React, Node, React, Node, React, Node,React, Node, React, Node, React, Node, React, Node,</span>
        </div>
        <div className="flex flex-row gap-x-4">
            <span className="text-white font-bold text-lg ">Github link: </span>
            <a className="text-white font-normal text-lg" href="https://github.com/Nagaveninayak" target="_blank">Todo List</a>
        </div>
      </section>
    </div>
  );
}
