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

export default function UserDashboard({songs, artists}) {
  const [tab, setTab] = useState("songs")
  const {darkMode} = useContext(DarkModeContext)
  const [user, setUser] = useState(null)
  

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
                <button className={`flex items-center border rounded-lg ${darkMode? "border-white  hover:bg-gray-700" : "border-black bg-gray-100 hover:bg-gray-300"} justify-center w-[160px] h-[40px] p-2`}>Refresh API Data</button>
                
            </div>
            
            </div>
            <div className='flex gap-4 mt-8'> 
            <TableTab name="Top Songs" selected={tab == "songs"} value="songs" changeTab={changeTab}/>
            <TableTab name="Top Artists" selected={tab == "artists"} value="artists" changeTab={changeTab}/>
            <TableTab name="Top Genres" selected={tab == "genres"} value="genres" changeTab={changeTab}/>
            </div>
            <div className={`border rounded-r-2xl p-4 ${darkMode ? "border-white" : "border-black"}`}>
            {tab == "songs" ? <Songs songs={songs}/> : tab == "artists" ? <Artists artists={artists}/> : <Genres/>}
            </div>
            
        </div>
  )
}