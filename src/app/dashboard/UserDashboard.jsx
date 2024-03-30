"use client"


import { useEffect, useState } from 'react'
import DashboardTable from "./DashboardTable"
import { useContext } from 'react'
import { DarkModeContext } from './DarkModeProvider'
import useSWR from 'swr'
import { fetcher } from '../../lib/fetcher'
import { useRouter } from "next/navigation";
import DashboardHeader from "./DashboardHeader"



export default function UserDashboard() {
  const router = useRouter()
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

  /*if (!profile || !songs || !artists) {
    return (
    <div>
      <p>Loading...</p>
      <button onClick={handleSpotifyLogin} className={`flex appearance-none w-full border text-center px-4 py-2 rounded ${darkMode? "border-white hover:bg-gray-800 bg-black " : "border-black bg-gray-200 hover:bg-gray-300 text-black"}`}> Try Signing Into Spotify Again </button>
      <p> Make sure to use username: examplespotifyemail@gmail.com password: example12345</p>
      <p> If you aren't getting prompted to sign into spotify and are stuck on this page your personal spotify account is probably cached, open a private tab and try using the username + passoword for the example account listed above</p>
    </div>
    )
  }*/

  return (
        <div className='flex flex-col'>
            <DashboardHeader profile={profile} handleSpotifyLogin={handleSpotifyLogin} handleDropdownChange={handleDropdownChange} dropdown={dropdown} darkMode={darkMode}/>
            <DashboardTable songs={songs} dropdown={dropdown} artists={artists} changeTab={changeTab} tab={tab} darkMode={darkMode}/>
        
        </div>
  )
}

/*<div className='flex gap-4 mt-8'> 
            <TableTab name="Top Songs" selected={tab == "songs"} value="songs" changeTab={changeTab}/>
            <TableTab name="Top Artists" selected={tab == "artists"} value="artists" changeTab={changeTab}/>
            <TableTab name="Top Genres" selected={tab == "genres"} value="genres" changeTab={changeTab}/>
            </div>
            <div className={`border rounded-r-2xl p-4 ${darkMode ? "border-white" : "border-black"}`}>
            {tab == "songs" ? <Songs songs={songs.data} dropdown={dropdown}/> : tab == "artists" ? <Artists songs={songs.data} artists={artists.data} dropdown={dropdown}/> : <Genres artists={artists.data} dropdown={dropdown}/>}
            </div>*/