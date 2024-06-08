import {
    SKILLS_FRONTEND,
    SKILLS_LANGUAGES,
    SKILLS_MAP,
    SKILLS_TITLES,
} from "@/constants/SkillsConstants";
import { useState } from "react";

//TODO: ADD ANIMATION EFFECT
export function Skills() {
    const [activeSkill, setActiveSkill] = useState(SKILLS_TITLES[0]);
    const [currentSkill, setCurrentSkill] = useState(SKILLS_LANGUAGES);

    const handleButtonClick = (title: string) => {
        setActiveSkill(title);
        setCurrentSkill(SKILLS_MAP[title as keyof typeof SKILLS_MAP]);
    };

    return (
        <div className=" bg-gradient-to-r from-cardGreen/95 to-cardDarkGreen/95 my-5 p-5 rounded-lg backdrop-blur-[5px]">
            <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">
                Skills / Talents
            </h1>
            <nav className="flex flex-row justify-start gap-x-10 mt-4">
                {SKILLS_TITLES.map((title, index) => {
                    const isActive = title === activeSkill;
                    return (
                        <button
                            onClick={() => handleButtonClick(title)}
                            className={`rounded-full cursor-pointer text-white px-5 py-3 bg-buttonInital ${isActive
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
                <table className="table-fixed w-full border-tableBorder border-2 text-white">
                    <thead>
                        <tr>
                            <th className="w-1/4 px-4 py-2 text-center border-tableBorder border-2 bg-tableBg text-tableText">
                                Skill
                            </th>
                            <th className="w-1/4 px-4 py-2 text-center border-tableBorder border-2 bg-tableBg text-tableText">
                                Level
                            </th>
                            <th className="w-1/2 px-4 py-2 text-center border-tableBorder border-2 bg-tableBg text-tableText">
                                Description
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentSkill.map((skill, index) => (
                            <tr key={index}>
                                <td className="w-1/4 px-4 py-2 text-center border-tableBorder border-2 bg-tableBg text-tableText font-semibold">
                                    {skill.title}
                                </td>
                                <td className="w-1/4 px-4 py-2 text-center border-tableBorder border-2">
                                    {skill.level}
                                </td>
                                <td className="w-1/2 px-4 py-2 border-tableBorder border-2">
                                    {skill.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
