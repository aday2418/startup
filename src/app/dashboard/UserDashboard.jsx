"use client"


import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import DashboardHeader from './DashboardHeader'
import DashboardTable from './DashboardTable'


export default function UserDashboard() {
  const [tab, setTab] = useState("songs")
  const {darkMode} = useContext(DarkModeContext)
  const [dropdown, setDropdown] = useState('short_term'); 
  
  //Calling my Server's endpoints below!!
  const { data: profile, isLoading: profileLoading } = useSWR('/api/spotify', fetcher) //Change this to 
  const { data: songs, isLoading: songsLoading } = useSWR('/api/spotify/songs', fetcher)
  const { data: artists, isLoading: artistsLoading } = useSWR(`/api/spotify/artists`, fetcher)

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

  const handleSpotifyLogin = async () => {
    //const state = randomBytes(16).toString('hex');

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      scope: ["user-top-read", "user-read-recently-played"].join(' '),
      redirect_uri: `${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "http://localhost:3000" : "https://startup.soundcircle.xyz"}/auth/callback`,
    }).toString()

    window.location.assign(`https://accounts.spotify.com/authorize?${params}`);
}

  //console.log(profile)

  return (
        <div className='flex flex-col'>
            <DashboardHeader profile={profile} handleSpotifyLogin={handleSpotifyLogin} handleDropdownChange={handleDropdownChange} dropdown={dropdown} darkMode={darkMode} ownPage={true}/>
            <DashboardTable songs={songs} dropdown={dropdown} artists={artists} changeTab={changeTab} tab={tab} darkMode={darkMode}/>
        
        </div>
  )
}
