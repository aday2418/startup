"use client"

import Link from "next/link";
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import LoginRow from './LoginRow'
import { createBrowserClient } from '@supabase/ssr'
import GitHub from "../components/icons/Github"

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
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    )
  
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
        scopes: ["user-top-read", "user-read-recently-played"]
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
    handleSpotifyLogin()
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
          <div className='flex flex-col items-center justify-center gap-4 '>
            <div className='flex flex-col max-w-[320px]  gap-2'>
              <LoginRow name="First Name" textType="text" variable={firstName} functionName={setFirstName}/>
              <LoginRow name="Last Name" textType="text" variable={lastName} functionName={setLastName}/>
              <LoginRow name="Username" textType="text" variable={spotifyUsername} functionName={setSpotifyUsername}/>
              <LoginRow name="Password" textType="password" variable={password} functionName={setPassword}/>
            </div>
            <div className='flex flex-col items-center gap-4 justify-center max-w-[1100px]'>
              <button className='flex min-w-[320px] bg-green-200 border rounded-md border-black justify-center' onClick={handleLogin}>Login</button>
              {urlMessage == "login" && <h1 className='text-red-500 font-bold'>Please Login Before Accessing The Dashboard</h1>}
              {urlMessage == "login" && <h1 className='flex items-center justify-center text-black-500 font-semibold'>If You Are Having Trouble Logging In Check The Github Link For a Spotify Username + Password That You Can Use</h1>}
              {urlMessage == "login" && <div className='flex flex-col items-center justify-center text-gray-500 font-medium'><h1 >You Wont Be Able To Login With A Personal Spotify Account Until You Are Registered With The Spotify API Since The App Is In Dev Mode</h1> <h1> Send Me A Canvas Message With The Email Linked To Your Spotify And I Will Register You</h1></div>}
                
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
