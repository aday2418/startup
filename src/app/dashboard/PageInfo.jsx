"use client"
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function PageInfo({title, children}){
    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className="relative w-full flex flex-col px-[50px] py-[30px] sidebar-height overflow-scroll">
            <h1 className='text-4xl '>{title}</h1>
            <div class={`w-full border-t ${darkMode ? "border-white": "border-black"} mt-2 mb-8`}></div>
            {children}
        </div>
    )
}