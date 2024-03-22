'use client'

import Link from "next/link";
import { use, useEffect, useState } from 'react';
import LoginRow from './LoginRow'
import GitHub from "../components/icons/Github"
import { Suspense } from 'react'
import ErrorMessage from "./ErrorMessage"
import { useRouter } from "next/navigation";
import useSWR from 'swr'
import { fetcher } from '../lib/fetcher'


export default function Home() {
  const router = useRouter()
  const [spotifyUsername, setSpotifyUsername] = useState('');
  const [password, setPassword] = useState('');
  const { data} = useSWR('/auth/userToken', fetcher) 

  useEffect(() => {
    const token = data?.data

    if(token) {
      router.push("/dashboard")
    }
    
  }, [data])

  const changeUsername = (newUser) => {
    setSpotifyUsername(newUser)
  }

  const changePassword = (newPass) => {
    setPassword(newPass)
  }

  const handleLogin = async () => {
    const username = spotifyUsername
    const res = await fetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({username, password})
    })

    const data = await res.json()
    router.push('/dashboard/onboarding')
    
  };

  const handleCreateAccount = async () => {
    const username = spotifyUsername
    const res = await fetch("/auth/createUser", {
      method: "POST",
      body: JSON.stringify({username, password})
    })
    router.push('/dashboard/onboarding')

  }
  
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
              <LoginRow name="Username" textType="text" variable={spotifyUsername} functionName={changeUsername}/>
              <LoginRow name="Password" textType="password" variable={password} functionName={changePassword}/>
            </div>
            <div className='flex flex-col  items-center gap-4 justify-center max-w-[1100px]'>
              <div className="flex flex-row gap-2 ">
                <button className='flex min-w-[130px] bg-green-200 border rounded-md border-black justify-center px-4' onClick={handleLogin}>Login</button>
                <button className='flex min-w-[130px] bg-green-200 border rounded-md border-black justify-center px-4' onClick={handleCreateAccount}>Create Account </button>
              </div>
              <Suspense>
                <ErrorMessage/>
              </Suspense>
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
