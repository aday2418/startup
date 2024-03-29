import AddFriendBlock from "./AddFriendBlock"

export default function AddFriendGrid({users, search, addFriend, friends}){
    const nonFriends = users.filter(user => 
        !Object.values(friends).some(friend => friend.username === user.username)
    );

    const filteredUsers = search ? nonFriends.filter(nonFriends => 
        nonFriends.username.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5) : [];

    return(
        <div>
            <div className='grid grid-cols-5 gap-8 w-full'>
            {search && filteredUsers.length > 0 && filteredUsers.map((user, index) => (<AddFriendBlock key={index} user={user} addFriend={addFriend}/>))}
            
            </div>
            <p className="font-bold">Right Now There Are Only 2 Real Users Whos Pages You Can Search. Both of their Usernames contain the number 1. </p>

        </div>
        
    )
}


