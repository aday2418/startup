import Tab from './Tab'
import Link from "next/link";
import Friend from '/src/components/icons/Friend'



export default function DashboardLayout({children})
{
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className="relative w-full header header-height border-b flex justify-between items-center border-gray-400 px-[40px]">
                <div>
                    <h1 className="text-white font-semibold tracking-wider text-2xl">SoundCircle</h1>
                </div>
                <div>
                    <a href="/">
                        <button type="submit" className="border-2 border-red-400 rounded-lg text-red-400 text-sm font-bold tracking-wider px-[10px] py-[3px] hover:bg-red-950">Logout</button>
                    </a>   
                </div>
            </div> 
            <div className="relative flex w-full">
                <div className="relative w-[200px] sidebar-height border-r border-gray-400 flex flex-col pt-[40px] gap-4 justify-between ">
                    <div>
                        <Tab pageName="Dashboard" link="/dashboard" selected="dashboard"/>
                        <Tab pageName="Friends" link="/dashboard/friends" selected="friends"/>
                        <Tab pageName="Settings" link="/dashboard/settings" selected= "settings"/>
                    </div>
                    <div>
                        <Link href="/dashboard">
                            <div className="relative w-full h-fit flex flex-row justify-center gap-2 border-t py-[20px] px-[15px] border-gray-400 hover:bg-gray-900 cursor-pointer hover:border-gray-500 smoothe">
                                <Friend fillColor="#FFFFFF" width={40} height={40} />\
                                <div>
                                    <h1 className="text-white text-base tracking-wide w-fit truncate">John Doe</h1>
                                    <h1 className="text-white text-xs tracking-wide w-fit truncate">username12345</h1>
                                </div>
                                
                            </div>
                        </Link>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}