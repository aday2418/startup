export default function FriendBlock({username, picture}){
    return(
        <div className='flex flex-col w-[130px] p-3 gap-2'>
            <div className='border rounded-full border-white'>
                {picture}
            </div>
            <p className="text-center">{username}</p>
            
        </div>
    )
}