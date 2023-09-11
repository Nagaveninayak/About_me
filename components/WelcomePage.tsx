import Image from "next/image";
import codeImage from "@/public/images/codeImage.jpg"

export function WelcomePage() {
    return (
        <div className="flex flex-col justify-center text-blue text-black items-center">
            <h2 className="text-3xl font-black mt-24 mb-10">Full Stack Developer</h2>
            <Image src={codeImage} alt='desk' className="w-1/2 h-1/2" />
            <div >
            </div>
        </div>
    )
}