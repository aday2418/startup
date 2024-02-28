import Friend from "@/components/icons/Friend"

export default function FriendBlock({username, color}){
    return(
        <div className='flex flex-col w-[130px] p-3 gap-2'>
            <div className='border rounded-full border-white'>
                <Friend fillColor={color}/>
            </div>
            <p className="text-center">{username}</p>
            
        </div>
    )
}