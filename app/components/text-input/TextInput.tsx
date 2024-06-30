
import TextInputProps from './TextInputProps'

export const TextInput = ({
    title,
    placeholder,
    customStyles,
}: TextInputProps) => {
  return (
    <div className='flex flex-row h-fit w-full gap-4'>
        <p className="text-black text-xl text-center flex w-fit">
            {title}
        </p>
        <input type="text"
        placeholder={placeholder}
        className={`${customStyles ? customStyles : "flex border-blue-300/15 border-4 rounded text-black w-full"}`}/>
    </div>
  )
}

