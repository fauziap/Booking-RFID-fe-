
type TypeProps = {
    'title': string,
    'image': string
    'locations': string,
    'fee': number
    'type': string
}
const PopulerBranch = (prop: TypeProps) => {
    const { title, image, locations } = prop
    return (
        <div className="">
            <div className="border border-gray-300 p-3 rounded-lg ">
                <div className="flex gap-5">
                    <div className="">
                        <img src={image} alt="" className="w-28 h-28 rounded-xl object-cover" />
                    </div>
                    <div className="">
                        <h5 className='text-2xl  font-semibold'>
                            {title}
                        </h5>
                        <p>
                            {locations}
                        </p>

                        <h2 className='text-blue-600 font-bold mt-6'>
                            Rp {prop.fee}/{prop.type}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopulerBranch