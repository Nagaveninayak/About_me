export function Footer() {
    return (
        <footer className="bg-black">
            <div className="flex flex-row justify-between text-blue text-white mt-5 mx-5 py-10">
                <div>
                    Name
                </div>
                <div className="grid grid-cols-3 gap-x-10 text-white mr-10">
                    <a href="#">about</a>
                    <a href="#">project</a>
                    <a href="#">contact</a>
                </div>
            </div>
        </footer>
    )
}