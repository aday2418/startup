import Tab from './Tab'
import Link from "next/link";
import Friend from '/src/components/icons/Friend'
import House from '@/components/icons/House';
import Dashboard from '@/components/icons/Dashboard';
import Gear from '@/components/icons/Gear';
import Sidebar from './Sidebar';


export default function DashboardLayout({children})
{
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <nav className="relative w-full header header-height border-b flex justify-between items-center border-gray-400 px-[40px]">
                <div className='flex flex-row gap-4'>
                    <h1 className="text-white font-semibold tracking-wider text-2xl">SoundCircle</h1>
                    <div className='flex flex-row gap-3 text-white items-center'>
                        <a href="/">Home</a>
                        <a href="/dashboard">Dashboard</a>
                        <a href="/dashboard/friends">Friends</a>
                        <a href="/dashboard/settings">Settings</a>
                    </div>
                </div>
                <div>
                    <a href="/">
                        <button type="submit" className="border-2 border-red-400 rounded-lg text-red-400 text-sm font-bold tracking-wider px-[10px] py-[3px] hover:bg-red-950">Logout</button>
                    </a>   
                </div>
            </nav> 
            <div className="relative flex w-full">
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}