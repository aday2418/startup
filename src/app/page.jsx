"use client"

import Image from 'next/image'
import House from '/src/components/icons/House'
import Dashboard from '/src/components/icons/Dashboard'
import Friend from '/src/components/icons/Friend'
import Gear from '/src/components/icons/Gear'
import Tab from './dashboard/Tab'
import GitHub from '@/components/icons/Github'
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoginRow from './LoginRow'


export default function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [spotifyUsername, setSpotifyUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  /*const changeFirstName = (value) => {
    setFirstName(value)
  }*/


  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission if using form element
    // Save to localStorage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('spotifyUsername', spotifyUsername);
    localStorage.setItem('password', password);
    // Navigate to dashboard
    router.push('/dashboard');
  };
  
  return (
    <div>
      <div className="relative w-full h-screen flex flex-col bg-gray-900">
        <header>
          <nav className='flex flex-row h-[100px] border-b border-black bg-green-200 items-center gap-5'>
              <div className='flex flex-row m-4 font-mono text-2xl font-bold'>
                <h1>SoundCircle</h1>
              </div>
              <div className='flex flex-row gap-3'>
                <a href="/">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/dashboard/friends">Friends</a>
                <a href="/dashboard/settings">Settings</a>
              </div>
          </nav>
        </header>
        <div className='flex flex-col h-full bg-white items-center justify-center gap-10'>
          <h1 className='text-8xl '>Welcome To SoundCircle</h1>
          <div className='flex flex-col gap-4 '>
            <div className='flex flex-col min-w-[270px] gap-2'>
              <LoginRow name="First Name" textType="text" variable={firstName} functionName={setFirstName}/>
              <LoginRow name="Last Name" textType="text" variable={lastName} functionName={setLastName}/>
              <LoginRow name="Spotify Username" textType="text" variable={spotifyUsername} functionName={setSpotifyUsername}/>
              <LoginRow name="Password" textType="password" variable={password} functionName={setPassword}/>
            </div>
            <div className='flex justify-center '>
              <button className='flex min-w-[350px] bg-green-200 border rounded-md border-black justify-center' onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
        <footer>
          <div className='flex flex-row h-[60px] bg-gray-300 items-center gap-3'>
            <div className='flex h-full p-2 ml-2'>
              <Link href="https://github.com/aday2418/startup">
                <GitHub fillColor=""/>
              </Link>
            </div>
            <h1 className='text-2xl'>Alison Day</h1>    
            </div>
        </footer>
      </div>
    </div>
  )
}

/*<div>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>

      <main>
        <h2>Welcome</h2>
        <p>Login to start using SoundCircle</p>
        <form method="get" action="/src/html/dashboard.html">
          <div>
            <label for="name">Username: </label>
            <input type="text" id="name" placeholder="Enter Username" />
          </div>
          <div>
            <label for="name">Password: </label>
            <input type="password" id="pass" placeholder="Enter Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </main>
      <br/>

      <footer>
        <hr />
        <span class="text-reset">Alison Day</span>
        <br />
        <a href="https://github.com/aday2418/startup">GitHub for SoundCircle</a>
      </footer>
    </div>*/

