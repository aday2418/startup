import Friend from "@/components/icons/Friend"
import FriendBlock from "./FriendBlock"

export default function FriendGrid(){
    const preExistingFakeFriends = [
        { username: "Friend1", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend2", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend3", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend4", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend5", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend6", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend7", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend8", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend9", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "Friend10", picture: <Friend fillColor="#FFFFFF"/> },
      ];
    
    return(
        <div className='grid grid-cols-5 gap-8 w-full'>
            {preExistingFakeFriends.map((friend, index) => (<FriendBlock key={index} username={friend.username} picture={friend.picture}/>))}
        </div>
    )
}