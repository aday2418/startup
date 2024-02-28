"use client"

import Tab from "./Tab"
import House from "@/components/icons/House"
import Dashboard from "@/components/icons/Dashboard"
import Friend from "@/components/icons/Friend"
import Gear from "@/components/icons/Gear"
import Link from "next/link";
import { usePathname } from "next/navigation";
import GitHub from "@/components/icons/Github"


export default function Sidebar(){

    const path = usePathname();
    const sections = path.split('/');
    const root = sections[1]
    const current = sections[2]
    
    return(
       
        <div className="relative w-[100px] sidebar-height border-r border-gray-400 flex flex-col pt-[40px] gap-4 justify-between ">
            <div className="flex-col">
                <Tab svg={<Dashboard fillColor="#FFFFFF"/>} link="/dashboard" selected={root == "dashboard" && !current}/>
                <Tab svg={<Friend fillColor="#FFFFFF"/>} link="/dashboard/friends" selected={current == "friends"}/>
                <Tab svg={<Gear fillColor="#FFFFFF"/>} link="/dashboard/settings" selected={current =="settings"}/>
                <Tab svg={<GitHub fillColor='#FFFFFF'/>} link="https://github.com/aday2418/startup" selected={false}/>
            </div>
            <footer>
                <Link href="https://github.com/aday2418/startup">
                    <div className="relative w-full h-fit flex flex-row gap-2 border-t py-[20px] px-[15px] border-gray-400 hover:bg-gray-900 cursor-pointer hover:border-gray-500 smooth">
                        <div className="flex flex-col">
                            <h1 className="text-xs text-base tracking-wide w-fit truncate">Alison Day</h1>
                            <p className="text-xs">Github</p>
                        </div>
                    </div>
                </Link>
            </footer>
        </div>
    )
}