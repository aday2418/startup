"use client"

import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '@/components/icons/Friend'
import { useEffect, useState } from 'react'
import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'
import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'
import Dropdown from './Dropdown'

export default function UserDashboard({songs, artists}) {
  const [tab, setTab] = useState("songs")
  const {darkMode} = useContext(DarkModeContext)
  const [user, setUser] = useState(null)
  const [dropdown, setDropdown] = useState('short-term'); 

  useEffect(() => {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedSpotify = localStorage.getItem('spotifyUsername');
    const storedPicture = localStorage.getItem('profilePicture')
  
    const newUser = {
      firstName: storedFirstName,
      lastName: storedLastName,
      username: storedSpotify,
      picture: storedPicture 
    }

    setUser(newUser)
  }, [])

  const changeTab = (newTab) => {
    setTab(newTab)
  }

  const handleDropdownChange = (dropdownValue) => {
    setDropdown(dropdownValue);
  };

  const index = {
    'short-term': 0,
    'medium-term': 1,
    'long-term': 2
  }[dropdown];

  return user && (
        <div className='flex flex-col'>
            <div className='flex flex-row h-[150px] gap-8'>
            <div className={`flex flex-shrink-0 flex-grow-0 border rounded-full ${darkMode? "border-white" : "border-black"} h-[150px] w-[150px] overflow-hidden items-center`}>
                {user.picture ? <img src={user.picture} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor="#FFFFFF"/>}
                
            </div>
            <div className='flex justify-between w-full items-center pb-8'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl gap-3'>
                    <h1>{user.firstName}</h1>
                    <h1>{user.lastName}</h1>
                    </div>
                    <p className="text-md ">{user.username} | 10 Friends</p>
                </div>
                <Dropdown setDropdownChange={handleDropdownChange}/>
                
            </div>
            
            </div>
            <div className='flex gap-4 mt-8'> 
            <TableTab name="Top Songs" selected={tab == "songs"} value="songs" changeTab={changeTab}/>
            <TableTab name="Top Artists" selected={tab == "artists"} value="artists" changeTab={changeTab}/>
            <TableTab name="Top Genres" selected={tab == "genres"} value="genres" changeTab={changeTab}/>
            </div>
            <div className={`border rounded-r-2xl p-4 ${darkMode ? "border-white" : "border-black"}`}>
            {tab == "songs" ? <Songs songs={songs[index]}/> : tab == "artists" ? <Artists songs={songs[index]} artists={artists[index]}/> : <Genres artists={artists[index]}/>}
            </div>
            
        </div>
  )
}