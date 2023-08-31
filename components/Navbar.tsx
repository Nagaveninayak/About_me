export function Navbar() {
    return (
        <div className="flex flex-row justify-between text-blue">
            <div>
                Name
            </div>
            <div className="grid grid-cols-3 gap-x-2">
                <a href="#">about</a>
                <a href="#">project</a>
                <a href="#">contact</a>
            </div>
        </div>
    )
}