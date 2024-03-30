
import FriendBlock from "./FriendBlock"

export default function FriendGrid({friends, removeFriend}){ 



    return(
        <div>
            {friends.length > 0 ? <div className='grid grid-cols-5 gap-8 w-full'>
            {friends.map((friend, index) => (<FriendBlock key={index} user={friend} removeFriend={removeFriend}/>))} </div> : <div className="flex flex-col gap-1"><p className="text-2xl opacity-50">Looks Like You Don't Have Any Friends Yet... </p> <p className="text-xl opacity-50">Search For Friends Below To Get Started!</p></div>}
            <p className="gap-2 font-bold">You Can Click On Any Of Your Friends To View Their Profiles</p>
            <p className="font-bold"> The grey/green circle next to the Profile Picture indactes whether or not a user is currently signed into their account (WebSocket Data)</p>
            <p className="font-bold"> To Check this feature in grading just create 2 accounts, add the new account as a friend, and stay signed into both</p>
        </div>
        
    )
}