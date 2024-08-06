type TypeProps = {
    'nameRuangan': string,
    'image': string,
    'star': number,
    'desc': string,
    'harga': number
    'type': string
}

const DisplayCard = (prop: TypeProps) => {
    const { nameRuangan, image, star } = prop

    return (
        <div className='flex gap-2'>
            <div className="border border-gray-300 p-2 rounded-lg w-80">
                <img src={image} alt="" />
                <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-1">
                        <h5 className='text-2xl mt-2 font-semibold'>
                            {nameRuangan}
                        </h5>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-end mr-3">
                            <i className='bx bxs-star text-2xl text-yellow-400 mt-2'></i>
                            <h5 className='mt-3 ml-1 text-lg font-semibold'>
                                {star}
                            </h5>
                        </div>
                    </div>
                </div>
                <p className='text-lg mt-4 text-gray-500'>
                    {prop.desc}
                </p>
                <h2 className='mt-2 text-lg text-blue-600'>
                    Rp {prop.harga} / {prop.type}
                </h2>
            </div>
        </div>
    )
}

export default DisplayCard