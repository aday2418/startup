import Friend from "@/components/icons/Friend"
import FriendBlock from "./FriendBlock"

export default function FriendGrid({friends, removeFriend}){
    
    return(
        <div className='grid grid-cols-5 gap-8 w-full'>
            {friends.map((friend, index) => (<FriendBlock key={index} user={friend} color={friend.color} removeFriend={removeFriend}/>))}
        </div>
    )
}