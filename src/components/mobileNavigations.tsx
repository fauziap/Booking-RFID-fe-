
const MobileNavigations = () => {
    return (
        <>
        <div className="fixed w-screen bottom-0 bg-gray-300 p-3">
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1 flex justify-center">
                    <i className='bx bx-home-alt  text-2xl text-blue-400 font-semibold' />
                    <span className="ml-2 mt-1 text-blue-500 font-semibold">
                        Home
                    </span>
                </div>
                <div className="col-span-1 flex justify-center">
                    <i className='bx bx-calendar text-2xl' />
                </div>
                <div className="col-span-1 flex justify-center">
                    <i className='bx bx-heart text-2xl' />
                </div>
                <div className="col-span-1 flex justify-center">
                    <i className='bx bx-user text-2xl' />
                </div>
            </div>
        </div>
        </>
    )
}

export default MobileNavigations