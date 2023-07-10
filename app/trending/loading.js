import Image from "next/image"

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
    <Image src={'/spinner.svg'} width={800} className="flex items-center justify-center" height={800} alt="spinner"/>
    </div>
  )
}

export default Loading
