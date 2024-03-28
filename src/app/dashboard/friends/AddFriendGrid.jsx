import AddFriendBlock from "./AddFriendBlock"

export default function AddFriendGrid({users, search, addFriend, friends}){
    
    const nonFriends = users.filter(user => !friends.includes(user));
    console.log(nonFriends)

    const filteredUsers = search ? nonFriends.filter(nonFriends => 
        nonFriends.username.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5) : [];
    console.log(filteredUsers)

    return(
        <div className='grid grid-cols-5 gap-8 w-full'>
            {search && filteredUsers.length > 0 && filteredUsers.map((user, index) => (<AddFriendBlock key={index} user={user} addFriend={addFriend}/>))}
        </div>
    )
}


