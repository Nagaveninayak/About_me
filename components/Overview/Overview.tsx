import { Education } from "./Education"
import { Introduction } from "./Introduction"

export function Overview() {
    return (
        <div className="flex flex-col mt-24">
            <Introduction />
            <Education />
        </div>
    )
}