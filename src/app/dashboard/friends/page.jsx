"use client"

import PageInfo from '../PageInfo'
import AddFriendGrid from './AddFriendGrid'
import FriendGrid from './FriendGrid'
import { useState } from 'react';


export default function Friends() {
    const [search, setSearch] = useState(''); // State to hold the search term

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <PageInfo title="Friends">
            <div className='flex flex-col text-white'>
                <h1 className='text-2xl mb-2'>My Friends</h1>
                <FriendGrid/>
                
                <h1 className='text-white mt-4 text-2xl mt-6 mb-6'>Add New Friends</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row gap-2 mb-6'>
                        <p>Search For Friend: </p>
                        <input className='border rounded text-black min-w-[200px]' type="text" placeholder="Enter Username" onChange={handleSearchChange} value={search}/>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <AddFriendGrid search={search}/>
                </div>
            </div>
        </PageInfo> 
    )
}