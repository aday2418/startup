import Friend from "../../../components/icons/Friend"
import FriendBlock from "./FriendBlock"

export default function FriendGrid({friends, removeFriend}){
    
    return(
        <div>
            {friends.length > 0 ? <div className='grid grid-cols-5 gap-8 w-full'>
            {friends.map((friend, index) => (<FriendBlock key={index} user={friend} color={friend.color} removeFriend={removeFriend}/>))} </div> : <div className="flex flex-col gap-1"><p className="text-2xl opacity-50">Looks Like You Don't Have Any Friends Yet... </p> <p className="text-xl opacity-50">Search For Friends Below To Get Started!</p></div>}
        </div>
        
    )
}