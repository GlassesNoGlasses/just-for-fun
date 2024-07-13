import Image from "next/image"
import { CollageProps } from "./CollageProps"


export const Collage = ({
    title,
    bgDisplay,
    active,
    iconPath,
    customStyles,
}: CollageProps) => {
  return (
    <div className={`flex h-[10vh] w-[15vw] ${bgDisplay} bg-cover
    ${customStyles ? customStyles : "border-black border-4 border-solid"}`}>
      <div className={`flex flex-col h-full w-full ${active ? "bg-gray-700/70" : "bg-gray-900/95"} align-middle justify-center`}>
        {iconPath && <Image src={iconPath} alt={title} className="flex h-1/2 w-1/3"/>}
        <h1 className={`text-center text-2xl font-sans bg-opacity-50 ${!active && "text-gray-600"}`}>{title}</h1>
      </div>
    </div>
  )
}

