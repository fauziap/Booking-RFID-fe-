
type PropsType  = {
  title: string
}

const ParagrafJudul = (prop: PropsType) => {
  const { title } = prop
  return (
    <p className="font-semibold">{title}</p>
  )
}

export default ParagrafJudul