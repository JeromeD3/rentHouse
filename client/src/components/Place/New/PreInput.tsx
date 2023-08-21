interface PreInputProps {
  title: string
  desc: string
}

export const PreInput = ({ title, desc }: PreInputProps) => {
  return (
    <>
      <h2 className="text-2xl mt-4">{title}</h2>
      <p className="text-gray-500 text-sm">{desc}</p>
    </>
  )
}
