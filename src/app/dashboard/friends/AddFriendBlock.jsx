import Friend from "@/components/icons/Friend"

export default function AddFriendBlock({user, addFriend}){
    const handleClick = () => {
        addFriend(user)
    }

    return(
        <button className='relative flex flex-col w-[130px] p-3 gap-2 items-center' onClick={handleClick} >
            <div className='border rounded-full border-white h-[100px]'>
                <Friend fillColor={user.color}/>
            </div>
            <p className="text-center">{user.username}</p>
        </button>        
    )
}