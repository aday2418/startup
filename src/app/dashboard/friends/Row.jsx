export default function Row({image, name, size}){
    return(
        <button className={`flex flex-row ${size} h-[30px] items-center text-xl gap-4`}>
            {image}
            <p className='text-white'>{name}</p>
        </button>
    )
}
