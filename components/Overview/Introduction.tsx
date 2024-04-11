import Image from "next/image"
import codingImage from "../../public/images/codingImage.jpeg";

export function Introduction() {
    return (
        <header className="flex flex-col ">
            <div className="flex flex-row gap-x-4">
                <Image src={codingImage} alt='info' className="w-12 h-12 rounded-lg mt-1"/>
                <hgroup className="flex flex-col justify-center gap-1">
                    <h2 className="text-white text-2xl">Nagaveni Nayak</h2>
                    <p className="text-white text-sm">Exploring...</p>
                </hgroup>
            </div>
            <h2 className="text-sm font-semibold text-left text-white mt-1">
                Unboxing and Understanding as I travel through tech verse
            </h2>
        </header>
    )
}