import { SKILLS_TITLES } from "@/constants/SkillsConstants"

export function Skills() {
    return (
        <div className=" bg-gradient-to-r from-cardGreen/90 to-cardDarkGreen/90 my-5 p-5 rounded-lg ">
            <h1 className="text-white font-extrabold text-2xl border-solid border-b-2 py-1 border-white">Skills / Talents</h1>
            {/* {SKILLS_TITLES.map((title) => {
                return <h1>{title}</h1>
            })} */}
        </div>
    )
}