"use client"
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"
import Link from "next/link";

export default function PageInfo({title, children, backButton = false}){
    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className="relative w-full flex flex-col px-[50px] py-[30px] sidebar-height overflow-scroll">
                {backButton ? 
                <div className="flex flex-row gap-4 items-center"> 
                    <Link href="/dashboard/friends">
                        <button className={`border px-2 py-1 ${darkMode ? "border-white hover:bg-gray-700" : "border-black bg-gray-100 hover:bg-gray-300"}  rounded-lg`}>Back To Friends</button>
                    </Link>
                <h1 className='text-4xl '>{title}</h1> </div> : <h1 className='text-4xl '>{title}</h1>}
            
            <div class={`w-full border-t ${darkMode ? "border-white": "border-black"} mt-2 mb-8`}></div>
            {children}
        </div>
    )
}