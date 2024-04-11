"use client"

import PageInfo from '../PageInfo'
import AddFriendGrid from './AddFriendGrid'
import FriendGrid from './FriendGrid'
import { useState } from 'react';
import { addMongoFriend, removeMongoFriend } from '../../../actions/setMongoValue';


export default function Friends({allUsers, self, passedFriends}) {
    const [friends, setFriends] = useState(passedFriends ? passedFriends : []);
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const addFriend = (newFriend) => {    //This is only being disabled until the database is up <- Breaking trying to load API data and read from the example JSON file (from friends that don't actually have Spotify Accounts)
        if(!friends.includes(newFriend)){
            setFriends([...friends, newFriend])
            addMongoFriend(newFriend.username, self.username)
        }
    }

    const removeFriend = (friendToRemove) => {
        setFriends(friends.filter(friend => friend.username !== friendToRemove.username))
        console.log("About to enter remove function")
        removeMongoFriend(friendToRemove.username, self.username)

    }

    return (
        <PageInfo title="Friends">
            <div className='flex flex-col'>
                <h1 className='text-2xl mb-2'>My Friends</h1>
                <FriendGrid friends={friends} removeFriend={removeFriend}/>
                
                <h1 className='mt-4 text-2xl mt-6 mb-6'>Add New Friends</h1>
                <div className='flex flex-col gap-2 justify-center'>
                    <div className='flex flex-row gap-2 mb-6 items-center'>
                        <p>Search For Friend: </p>
                        <input className='border rounded text-black min-w-[200px] border-gray-500 p-1' type="text" placeholder="Enter Username" onChange={handleSearchChange} value={search}/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <AddFriendGrid users={allUsers} search={search} addFriend={addFriend} friends={friends}/>
                </div>
            </div>
        </PageInfo> 
    )
}