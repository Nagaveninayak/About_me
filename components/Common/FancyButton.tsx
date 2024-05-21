interface IFancyButtonProps {
    title: string;
    description: string;
    buttonLink: string;
}

export function FancyButton({ title, description, buttonLink }: IFancyButtonProps) {
    return (
        <div
            className="w-full h-full duration-500 group overflow-hidden relative rounded bg-[#011D1D] text-neutral-50 p-4 flex flex-col justify-evenly"
        >
            <div
                className="absolute blur duration-500 group-hover:blur-none w-64 h-64 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-[#0F5E5E] right-1 -bottom-24"
            ></div>
            <div
                className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[#4D5746] right-1 -top-12"
            ></div>
            <div
                className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-[#BEE3D8] rounded-full group-hover:-translate-x-12"
            ></div>
            <div
                className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-[#818B67] bottom-5 left-12"
            ></div>
            <div className="z-10 flex flex-col justify-evenly w-full h-full">
                <span className="text-2xl font-bold">{title}</span>
                <p>
                    {description}
                </p>
                <button
                    className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3"
                >
                    GITHUB LINK
                </button>
            </div>
        </div>
    )
}


