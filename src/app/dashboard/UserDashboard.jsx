"use client"

import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '../../components/icons/Friend'
import { useEffect, useState } from 'react'
import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'
import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'
import Dropdown from './Dropdown'
import { createClient } from '@supabase/supabase-js'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'


export default function UserDashboard() {

  const [tab, setTab] = useState("songs")
  const {darkMode} = useContext(DarkModeContext)
  const [user, setUser] = useState(null)
  const [dropdown, setDropdown] = useState('short_term'); 
  
  //Calling my Server's endpoints below!!
  const { data: profile, isLoading: profileLoading } = useSWR('/api/spotify', fetcher) //Change this to 
  const { data: songs, isLoading: songsLoading } = useSWR(`/api/spotify/songs?timeframe=${dropdown}`, fetcher)
  const { data: artists, isLoading: artistsLoading } = useSWR(`/api/spotify/artists?timeframe=${dropdown}`, fetcher)
  
  console.log({ profile, songs, artists })

  useEffect(() => {
    //const storedFirstName = localStorage.getItem('firstName');
    //const storedLastName = localStorage.getItem('lastName');
    const storedSpotify = localStorage.getItem('spotifyUsername');
    const storedPicture = localStorage.getItem('profilePicture');
    const storedFriends = localStorage.getItem('friends')
  
    const newUser = {
      //firstName: storedFirstName,
      //lastName: storedLastName,
      username: storedSpotify,
      picture: storedPicture, 
      friends: storedFriends
    }

    setUser(newUser)
  }, [])

  useEffect(() => {
    const interval = 10 * 60 * 1000; // 10 minutes in milliseconds

    const repeatTask = async () => {
      await fetch(`${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}/auth/token/refresh`)
    };

    const intervalId = setInterval(repeatTask, interval);

    return () => clearInterval(intervalId);
  }, []); 

  const changeTab = (newTab) => {
    setTab(newTab)
  }

  const handleDropdownChange = (dropdownValue) => {
    setDropdown(dropdownValue);
  };

  return (user && profile && songs && artists) && (
        <div className='flex flex-col'>
            <div className='flex flex-row h-[150px] gap-8'>
            <div className={`flex flex-shrink-0 flex-grow-0 border rounded-full ${darkMode? "border-white" : "border-black"} h-[150px] w-[150px] overflow-hidden items-center`}>
                {user.picture ? <img src={user.picture} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor="#FFFFFF"/>}
                
            </div>
            <div className='flex justify-between w-full items-center pb-8'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl gap-3'>
                    <h1>{profile.data.display_name}</h1>
                    </div>
                    <p className="text-md ">{profile.data.spotify_id} | {user.friends ? JSON.parse(user.friends).length : 0} Friends</p>
                </div>
                <div className='flex flex-col'>
                  <Dropdown dropdown={dropdown} setDropdownChange={handleDropdownChange}/>
                </div>  
            </div>
            
            </div>
            <div className='flex gap-4 mt-8'> 
            <TableTab name="Top Songs" selected={tab == "songs"} value="songs" changeTab={changeTab}/>
            <TableTab name="Top Artists" selected={tab == "artists"} value="artists" changeTab={changeTab}/>
            <TableTab name="Top Genres" selected={tab == "genres"} value="genres" changeTab={changeTab}/>
            </div>
            <div className={`border rounded-r-2xl p-4 ${darkMode ? "border-white" : "border-black"}`}>
            {tab == "songs" ? <Songs songs={songs.data}/> : tab == "artists" ? <Artists songs={songs.data} artists={artists.data}/> : <Genres artists={artists.data}/>}
            </div>
            
        </div>
  )
}