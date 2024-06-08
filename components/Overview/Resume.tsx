import { RESUME } from "@/constants/ResumeConstants";
import Image from "next/image";

export function Resume() {
  const { name, job, contact, skills, about, work, education, hobbies } =
    RESUME;

  return (
    <div className=" bg-gradient-to-r from-cardGreen/95 to-cardDarkGreen/95 my-5 p-5 rounded-lg backdrop-blur-[5px]">
      <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">
        Resume
      </h1>
      <div>
        {/* {header} */}
        <div className="mx-auto ">
          <div className=" relative mt-6 rounded-2xl ">
            <div className="header w-full text-center bg-resumeBgHeader text-gray-200 p-8 rounded-2xl">
              <span className="name block text-3xl font-bold mb-2">{name}</span>
              <span className="job italic">{job}</span>
            </div>

            <div className=" border-gray-300 rounded-b-2xl p-6 text-gray-200">
              <div className="row flex flex-wrap">
                <div className="col-md-8 w-2/3">
                  <div>
                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <span className="icon w-12 mr-4">
                          <Image src={about.icon} alt={about.title} />
                        </span>
                        <span className="text text-2xl font-bold">
                          {about.title}
                        </span>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: about.content }}
                      ></div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <span className="icon w-12 mr-4">
                          <Image src={work.icon} alt={work.title} />
                        </span>
                        <span className="text-2xl font-bold">{work.title}</span>
                      </div>
                      <ul className="list-none p-0">
                        {work.exp.map((item, i) => (
                          <li
                            key={i}
                            className="mb-4 grid grid-cols-3 text-left"
                          >
                            <span className="title inline-block">
                              {item.title}
                            </span>

                            <span className="time">{item.time}</span>
                            <a
                              className="inline-block font-bold text-white"
                              target="_blank"
                              href={item.url}
                            >
                              {item.company}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <span className="icon w-12 mr-4">
                          <Image src={education.icon} alt={education.title} />
                        </span>
                        <span className="text text-2xl font-bold">
                          {education.title}
                        </span>
                      </div>
                      <ul className="list-none p-0">
                        {education.edu.map((item, i) => (
                          <li
                            key={i}
                            className="mb-4 grid grid-cols-3 text-left"
                          >
                            <span className="title inline-block">
                              {item.title}
                            </span>
                            <span className="time">{item.time}</span>
                            <a
                              className="company inline-block font-bold text-white"
                              target={item.url !== "#Resume" ? "_blank" : ""}
                              href={item.url}
                            >
                              {item.company}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center mb-4">
                        <span className="icon w-12 mr-4">
                          <Image src={hobbies.icon} alt={hobbies.title} />
                        </span>
                        <span className="text text-2xl font-bold">
                          {hobbies.title}
                        </span>
                      </div>
                      <ul className="list-none p-0">
                        {hobbies.hobbies.map((item, i) => (
                          <li key={i} className="mb-4 text-left">
                            <p className="inline-block font-bold text-lg">
                              {item.title}
                            </p>
                            <p className="">{item.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 w-1/3">
                  <div className="">
                    <ul className=" list-none p-0 mb-8 ">
                      {contact.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center p-3 border border-gray-400 hover:bg-gray-300  hover:text-gray-800"
                        >
                          <span className="icon w-6 mr-4">
                            <Image src={item.image} alt={item.title} />
                          </span>
                          <span
                            className="value font-mono"
                            dangerouslySetInnerHTML={{ __html: item.value }}
                          ></span>
                        </li>
                      ))}
                    </ul>

                    <div className="shadow-sm border border-gray-400 p-4">
                      <div className="flex items-center border-b border-gray-400 mb-4 pb-2">
                        <span className="icon w-12 mr-4">
                          <Image src={skills.icon} alt={skills.title} />
                        </span>
                        <span className="title text-2xl font-bold">
                          {skills.title}
                        </span>
                      </div>
                      <ul className="list-none p-0">
                        {skills.skills.map((item, i) => (
                          <li key={i} className="flex items-center mb-2">
                            <span className="font-mono w-2/5 p-1">
                              {item.title}
                            </span>
                            <span className="bg-gray-300 rounded-full w-3/5 overflow-hidden">
                              <span
                                className=" bg-black text-white text-center block p-1"
                                style={{ width: `${item.process}%` }}
                              >
                                {item.process}%
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {prettyButton} */}
      </div>
    </div>
  );
}
