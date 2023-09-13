import { Education } from "./Education"
import { Introduction } from "./Introduction"
import { Projects } from "./Projects"
import { Skills } from "./Skills"
import { Resume } from "./Resume"

export function Overview() {
    return (
        <div className="flex flex-col mt-24">
            <Introduction />
            <Education />
            <Projects />
            <Skills />
            <Resume />
        </div>
    )
}