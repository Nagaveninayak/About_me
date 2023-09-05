export function Navbar() {
    return (
        <div>
            <div className="flex flex-row justify-between text-blue text-black my-3.5">
                <div>
                    Name
                </div>
                <div className="grid grid-cols-3 gap-x-2 text-black">
                    <a href="#">about</a>
                    <a href="#">project</a>
                    <a href="#">contact</a>
                </div>
            </div>
            <div className=" border-b-2 border-lime-950 mt-1 mb-4"></div>
        </div>
    )
}