"use client"

import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '@/components/icons/Friend'
import { useState } from 'react'
import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'

export default function Dahsboard() {
  const [tab, setTab] = useState("songs")

  const changeTab = (newTab) => {
    setTab(newTab)
  }

  return (
    <PageInfo title="Dashboard">
      <div className='flex flex-col text-white'>
        <div className='flex flex-row h-[150px] gap-8'>
          <div className="border rounded-full border-white">
            <Friend fillColor="#FFFFFF" width={40} height={40} />
          </div>
          
          <div className=''>
              <h1 className="text-3xl ">Firstname Lastname</h1>
              <h1 className="text-md ">username12345 | 115 Friends</h1>
          </div>
        </div>
        <div className='flex gap-4 mt-8'> 
          <TableTab name="Top Songs" selected={tab == "songs"} value="songs" changeTab={changeTab}/>
          <TableTab name="Top Artists" selected={tab == "artists"} value="artists" changeTab={changeTab}/>
          <TableTab name="Top Genres" selected={tab == "genres"} value="genres" changeTab={changeTab}/>
        </div>
        <div className='border p-4'>
          {tab == "songs" ? <Songs/> : tab == "artists" ? <Artists/> : <Genres/>}
        </div>
        
      </div>
    </PageInfo> 
  )
}
/*<div>
      <h1>SoundCircle<sup>&reg;</sup></h1>

      <hr />
  
    <main>
      <div>
        <h2>Your Profile</h2>
      </div>
      <table>
        <tr>
          <td>
            <img src="/src/images/profilePicture.svg" alt="Profile Picture" width="100"/>
          </td>
          <td>
            <div class="user">
              <span>Username:</span>
              <span class="user-name">MusicListener22873</span>
            </div>
            <br />
            <div>
              <a href="/src/html/friends.html"> 287 friends </a>
            </div>
          </td>
        </tr>
      </table>
      
      <br />
      <hr />

      <div>
        <h2>Your Listening Stats </h2>
        <h4>39,082 Yearly Minutes</h4>
        <img src="/src/images/lineGraph.jpeg" alt="Listening Graph" />
        <p>**In the final version this will be a line graph of the listening time by month</p>
        <table>
          <tr>
            <td>
              <h4>Top Songs</h4>
              <ol>
                <li>Something in the Orange</li>
                <li>Piano Man</li>
                <li>Stick Season</li>
                <li>Alrighty Aphrodite</li>
                <li>Eye of the Tiger</li>
              </ol>
            </td>
            <td>
              <img src="/src/images/somethingInTheOrange.jpeg" alt="Album Cover" width="150" height="150"/>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <h4> Top Artists</h4>
              <ol>
                <li>Phoebe Bridgers</li>
                <li>Noah Kahan</li>
                <li>Peach Pit</li>
                <li>Zach Bryan</li>
                <li>Hozier</li>
              </ol>
            </td>
            <td>
              <img src="/src/images/phoebeBridgers.jpeg" alt="Artist" width="150" height="150"/>
            </td>
          </tr>
        </table>
        <br/>
        <button type="submit">Refresh All Data From Spotify API</button>
        <p>**In the final version the listening minutes, top songs, and top artists will all come from the spotify API</p>
      </div>
    </main>

    <footer>
      <hr />
      <span class="text-reset">Alison Day</span>
      <br />
      <a href="https://github.com/aday2418/startup">GitHub</a>
    </footer>
    </div>*/