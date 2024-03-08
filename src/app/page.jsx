"use client"

import Image from 'next/image'
import House from '/src/components/icons/House'
import Dashboard from '/src/components/icons/Dashboard'
import Friend from '/src/components/icons/Friend'
import Gear from '/src/components/icons/Gear'
import Tab from './dashboard/Tab'
import GitHub from '@/components/icons/Github'
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoginRow from './LoginRow'
import { createBrowserClient } from '@supabase/ssr'



export default function Home() {
  const searchParams = useSearchParams()
  const urlMessage = searchParams.get("message")

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [spotifyUsername, setSpotifyUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const params = useSearchParams()

  const handleSpotifyLogin = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
  
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
      options: {
        redirectTo: "http://localhost:3000/auth/callback"
      }
    })
  }


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
            <div className='flex flex-col items-center gap-4 justify-center '>
              <button className='flex min-w-[350px] bg-green-200 border rounded-md border-black justify-center' onClick={handleSpotifyLogin}>Login</button>
              {urlMessage == "login" && <h1 className='text-red-500 font-bold'>Please Login Before Accessing The Dashboard</h1>}
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

