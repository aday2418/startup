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

  const storedFirstName = localStorage.getItem('firstName');
  const storedLastName = localStorage.getItem('lastName');
  const storedSpotify = localStorage.getItem('spotifyUsername');

  return (
    <PageInfo title="Dashboard">
      <div className='flex flex-col text-white'>
        <div className='flex flex-row h-[150px] gap-8'>
          <div className="border rounded-full border-white">
            <Friend fillColor="#FFFFFF" width={40} height={40} />
          </div>
          <div className='flex justify-between w-full items-center pb-8'>
            <div className='flex flex-col'>
                <div className='flex text-3xl gap-3'>
                  <h1>{storedFirstName}</h1>
                  <h1>{storedLastName}</h1>
                </div>
                <p className="text-md ">{storedSpotify} | 10 Friends</p>
            </div>
            <button className='flex items-center border rounded-lg border-white justify-center w-[160px] h-[40px] p-2 hover:bg-gray-700'>Refresh API Data</button>
            
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