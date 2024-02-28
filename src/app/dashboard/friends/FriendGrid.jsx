import Friend from "@/components/icons/Friend"
import FriendBlock from "./FriendBlock"

export default function FriendGrid({friends}){
    
    return(
        <div className='grid grid-cols-5 gap-8 w-full'>
            {friends.map((friend, index) => (<FriendBlock key={index} username={friend.username} color={friend.color}/>))}
        </div>
    )
}