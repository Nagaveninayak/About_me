import { TypewriterAnimation } from "./TypewriteAnimation";


interface IBashCardProps {
    title: string;
    tools: { mainTitle: string, description: string }[];
}

export function BashCard({ title, tools }: IBashCardProps) {
    return (
        <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono font-bold text-base">
            <div className="flex justify-between items-center">
                <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <p className="text-sm">{title}</p>
            </div>
            <div className="my-4">
                {
                    tools.map((items) => {
                        return (
                            <div key={items.mainTitle}>
                                {/* <p className="text-green-400 font-mono mb-.5 lowercase">$ {items.mainTitle}</p> */}
                                <TypewriterAnimation
                                    text={items.mainTitle} delay={500} infinite={false} />
                                <p className="text-white font-mono mb-4 lowercase">{items.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}