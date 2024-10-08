type PropsType = {
    'nama': string,
    'warna': string
}

const SimpleButton = (prop: PropsType) => {
    const { nama, warna } = prop
    return (
        <button className={`${warna} p-3 rounded-lg font-semibold text-lg text-white w-full`}>
            {nama}
        </button>
    );
}

export default SimpleButton