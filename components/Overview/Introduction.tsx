export function Introduction() {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-row gap-x-4">
                <button className="bg-white rounded-lg w-20 h-20 text-white">
                    Icon
                </button>
                <div className="flex flex-col justify-center">
                    <h2 className="text-white text-2xl">Name</h2>
                    <p className="text-white text-sm">Descripiton about the work</p>
                </div>
            </div>
            <h2 className="text-sm font-semibold text-left text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h2>
        </div>
    )
}