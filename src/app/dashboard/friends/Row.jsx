import Friend from "@/components/icons/Friend"
export default function Row({image, name, size}){
    return(
        <div className={`flex flex-row ${size} h-[30px] items-center text-xl gap-4`}>
                        {image}
                        <p className='text-white'>{name}</p>
                    </div>
    )
}
