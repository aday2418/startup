"use client"
import Image from 'next/image'
import PageInfo from '../PageInfo'
import Friend from '@/components/icons/Friend'
import { useState } from 'react'
import InfoRow from './InfoRow'

export default function Settings() {
  
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedSpotify = localStorage.getItem('spotifyUsername');

    return ( 
    <PageInfo title="Settings">
        <div className='flex flex-col text-white'>
            <div className='flex flex-row h-[200px] gap-8'>
                <div className='flex flex-col justify-center gap-4'>
                    <div className='border rounded-full h-[150px]'>
                        <Friend fillColor="#FFFFFF"/>
                    </div>
                    <button className='text-sm'>Change Profile Picture</button>
                </div>
                <div className='flex flex-col justify-top w-full gap-4'>
                    <InfoRow blockName="First Name" passedValue={storedFirstName}/>
                    <InfoRow blockName="Last Name" passedValue={storedLastName}/>
                    <InfoRow blockName="Spotify Account" passedValue={storedSpotify}/>
                </div>
            </div>
            <h1 className='text-3xl mt-8 mb-4'>Preferences</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"/>
                        </label>
                    <p>Dark Mode</p>
                </div>
                <button className='flex items-center border w-[150px] rounded-md border-white justify-center mt-4 p-1 hover:bg-gray-700'>Save Preferences</button>
            </div>
        </div>
    </PageInfo>    
    
    )
}