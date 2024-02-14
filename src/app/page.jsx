import Image from 'next/image'
import House from '/src/components/icons/House'
import Dashboard from '/src/components/icons/Dashboard'
import Friend from '/src/components/icons/Friend'
import Gear from '/src/components/icons/Gear'
import Tab from './dashboard/Tab'
import GitHub from '@/components/icons/Github'
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="relative w-full h-screen flex flex-col bg-gray-900">
        <header>
          <nav className='flex flex-row h-[100px] bg-green-300 items-center gap-5'>
              <div className='flex flex-row m-4 font-mono text-2xl font-bold'>
                <h1>SoundCircle</h1>
              </div>
              <div className='flex flex-row gap-3'>
                <a hhref="/">Home</a>
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
              <div className='flex flex-row justify-between'>
                <p>Username: </p>
                <input className='border rounded' type="text" placeholder="Username"/>
              </div>
              <div className='flex flex-row justify-between'>
                <p>Password: </p>
                <input className='border rounded' type="password" placeholder="Password"/>
              </div>
            </div>
            <div className='flex justify-center '>
              <Link href="/dashboard">
                <button className='flex min-w-[270px] bg-green-300 border rounded-md border-black justify-center'>Login</button>
              </Link>
             
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

