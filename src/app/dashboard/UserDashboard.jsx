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
  const [dropdown, setDropdown] = useState('short_term'); 
  
  //Calling my Server's endpoints below!!
  const { data: profile, isLoading: profileLoading } = useSWR('/api/spotify', fetcher) //Change this to 
  const { data: songs, isLoading: songsLoading } = useSWR('/api/spotify/songs', fetcher)
  const { data: artists, isLoading: artistsLoading } = useSWR(`/api/spotify/artists`, fetcher)
  console.log(profile,songs,artists)

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

  return (profile && songs && artists) && (
        <div className='flex flex-col'>
            <div className='flex flex-row h-[150px] gap-8'>
            <div className={`flex flex-shrink-0 flex-grow-0 border rounded-full ${darkMode? "border-white" : "border-black"} h-[150px] w-[150px] overflow-hidden items-center`}>
                {profile.data.images[1] ? <Image src={profile.data.images[1].url} alt="Profile" className="h-full w-full object-cover" width={150} height={150} /> : <Friend fillColor="#FFFFFF"/>}
            </div>
            <div className='flex justify-between w-full items-center pb-8'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl gap-3'>
                    <h1>{profile.data.display_name}</h1>
                    </div>
                    <p className="text-md ">{profile.data.username} | 0 {/* user.friends ? JSON.parse(user.friends).length : 0*/} Friends</p>
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
            {tab == "songs" ? <Songs songs={songs.data} dropdown={dropdown}/> : tab == "artists" ? <Artists songs={songs.data} artists={artists.data} dropdown={dropdown}/> : <Genres artists={artists.data} dropdown={dropdown}/>}
            </div>
        </div>
  )
}