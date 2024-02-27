"use client"

import Image from 'next/image'
import PageInfo from '../PageInfo'
import Friend from '@/components/icons/Friend'
import { useState, useEffect } from 'react'
import InfoRow from './InfoRow'

export default function Settings() {
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');
    const storedSpotify = localStorage.getItem('spotifyUsername');
    const storedPreference = localStorage.getItem('darkMode');
    const storedPicture = localStorage.getItem('profilePicture');

    const [darkMode, setDarkMode] = useState(storedPreference === 'true');
    const [profilePic, setProfilePic] = useState(storedPicture);

    const handleToggleChange = (e) => {
        setDarkMode(e.target.checked);
    };

    const handleChangeProfilePicture = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setProfilePic(reader.result);
            localStorage.setItem('profilePicture', reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

    const savePreferences = () => {
        localStorage.setItem('darkMode', darkMode);
    };

    console.log(darkMode)
    return ( 
    <PageInfo title="Settings">
        <div className='flex flex-col text-white'>
            <div className='flex flex-row h-[200px] gap-8'>
                <div className='flex flex-col justify-center gap-4 min-w-[160px] items-center'>
                    <div className='flex border rounded-full h-[150px] w-[150px] overflow-hidden '>
                    {profilePic ? <img src={profilePic} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor="#FFFFFF"/>}
                    </div>
                    <input type="file" id="profilePic" onChange={handleChangeProfilePicture} style={{ display: 'none' }} />
                    <label htmlFor="profilePic" className='flex text-sm cursor-pointer p-1 justify-center hover:border border-white rounded-lg'>Change Profile Picture</label>
                </div>
                <div className='flex flex-col justify-top w-full gap-4'>
                    <InfoRow blockName="First Name" passedValue={storedFirstName} localStorageKey="firstName"/>
                    <InfoRow blockName="Last Name" passedValue={storedLastName} localStorageKey="lastName"/>
                    <InfoRow blockName="Spotify Account" passedValue={storedSpotify} localStorageKey="spotifyUsername"/>
                </div>
            </div>
            <h1 className='text-3xl mt-8 mb-4'>Preferences</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                        <label class="switch">
                            <input type="checkbox" checked={darkMode} onChange={handleToggleChange}/>
                            <span class="slider round"/>
                        </label>
                    <p>Dark Mode</p>
                </div>
                <button className='flex items-center border w-[150px] rounded-md border-white justify-center mt-4 p-1 hover:bg-gray-700' onClick={savePreferences}>Save Preferences</button>
            </div>
        </div>
    </PageInfo>    
    
    )
}
//                    <button className='text-sm'>Change Profile Picture</button>
