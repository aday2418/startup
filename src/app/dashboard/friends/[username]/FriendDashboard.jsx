"use client"

import Image from 'next/image'
import Friend from '../../../../components/icons/Friend'
import { useEffect, useState } from 'react'
import TableTab from '../../TableTab'
import Songs from '../../Songs'
import Artists from '../../Artists'
import Genres from '../../Genres'
import { useContext } from 'react'
import { DarkModeContext } from '../../DarkModeProvider'
import Dropdown from '../../Dropdown'
import DashboardHeader from "../../DashboardHeader"
import DashboardTable from "../../DashboardTable"


export default function FriendDashboard({user}) {
    const [tab, setTab] = useState("songs")
    const {darkMode} = useContext(DarkModeContext)
    const [dropdown, setDropdown] = useState('short_term'); 

    const profile = {
        data: {
          display_name: user.display_name,
          friends: user.friends,
          images: user.images,
          spotify_id: user.spotify_id,
          username: user.username
        } 
    }

    const artists = {
      data: {
        short_term: user.shortArtists,
        medium_term: user.mediumArtists,
        long_term: user.longArtists
      }
    }
    const songs = {
      data: {
        short_term: user.shortSongs,
        medium_term: user.mediumSongs,
        long_term: user.longSongs
      }
    }

  const handleSpotifyLogin = () => {
      
  };

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

  return (
    <div className='flex flex-col'>
            <DashboardHeader profile={profile} handleSpotifyLogin={handleSpotifyLogin} handleDropdownChange={handleDropdownChange} dropdown={dropdown} darkMode={darkMode} ownPage={false}/>
            <DashboardTable songs={songs} dropdown={dropdown} artists={artists} changeTab={changeTab} tab={tab} darkMode={darkMode}/>
        
    </div>

        
  )
}