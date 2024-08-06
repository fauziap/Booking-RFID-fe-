type TypeProps = {
    'title' : string,
    'icons' : string
    'active'?: boolean
}

const MainMenuCard = (prop: TypeProps) => {
    const { title, icons, active } = prop

    const Background = active ? 'bg-blue-600 text-white' : 'border border-gray-300'
    return (
        <div className={`p-2 rounded-lg w-48 ${Background}`}>
            <div className="flex gap-2">
                <i className={`bx bx-${icons} text-3xl`}></i>
                <h2 className='text-lg mt-1'>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default MainMenuCard