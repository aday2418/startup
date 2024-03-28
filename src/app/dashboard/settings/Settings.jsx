"use client"

import PageInfo from '../PageInfo'
import Friend from '../../../components/icons/Friend'
import { useState, useEffect, useContext } from 'react'
import InfoRow from './InfoRow'
import { DarkModeContext } from '../DarkModeProvider'
import getUsername, { setMongoValue } from '../../../actions/setMongoValue'
import { useRouter } from 'next/navigation';


export default function Settings({user}){
    const router = useRouter()
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [profilePic, setProfilePic] = useState(`${user && user.images[1] ? user.images[1].url : null}`);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [darkModePreference, setDarkModePreference] = useState(darkMode);
    console.log({profilePic})

    /*if (user.images[0].url){
        setProfilePic(user.images[0].url)
    }
    console.log(profilePic)*/

    useEffect(() => {
        // Access localStorage only when the component mounts on the client side
        const storedPicture = localStorage.getItem('profilePicture');
        //if (storedPicture) setProfilePic(storedPicture);

        // Other localStorage operations can go here
        
        const storedSpotify = localStorage.getItem('spotifyUsername');
        const storedPassword = localStorage.getItem('password');
        const storedPreference = localStorage.getItem('darkMode'); 

        //if (storedPicture) setProfilePic(storedPicture);
        
        setPassword(storedPassword || '');
        setDarkModePreference(storedPreference === 'true');
        
        // If you need to use these stored values, consider setting them to state here
    }, [toggleDarkMode, darkMode]);


    const handleToggleChange = (e) => {
        toggleDarkMode()
        //updateDatabase
    };

    const handleChangeProfilePicture = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onloadend = () => {
            const images = [0,{url: reader.result}]
            //console.log({images})
            //console.log(reader.result)
            setProfilePic(images[1].url);
            setMongoValue('images', images);
          };
          reader.readAsDataURL(file);
        }
        router.refresh()
      };

    return ( 
    <PageInfo title="Settings">
        <div className='flex flex-col'>
            <div className='flex flex-row h-[200px] gap-8'>
                <div className='flex flex-col justify-center gap-4 min-w-[160px] items-center'>
                    <div className={`flex border ${darkMode ? "border-white": "border-black"} rounded-full h-[150px] w-[150px] overflow-hidden `}>
                    {profilePic ? <img src={profilePic} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor="#FFFFFF"/>}
                    </div>
                    <input type="file" id="profilePic" onChange={handleChangeProfilePicture} style={{ display: 'none' }} />
                    <label htmlFor="profilePic" className={`flex text-sm cursor-pointer p-1 border justify-center ${darkMode ? "border-black hover:border-white hover:bg-gray-700": "border-white hover:border-black hover:bg-gray-300"} rounded-lg`}>Change Profile Picture</label>
                </div>
                <div className='flex flex-col justify-top w-full gap-4'>
                    <InfoRow blockName="Name" passedValue={user.display_name} mongoKey="display_name"/>
                    <InfoRow blockName="Username" passedValue={user.username} mongoKey="username"/>
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
            </div>
        </div>
    </PageInfo>    
    
    )
}