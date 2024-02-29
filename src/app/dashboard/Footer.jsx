"use client"
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"
import Link from "next/link";

export default function Footer(){
    const { darkMode } = useContext(DarkModeContext)
    return(
        <footer>
                <Link target="_blank" href="https://github.com/aday2418/startup">
                    <div className={`relative w-full h-fit flex flex-row gap-2 border-t py-[20px] px-[15px] border-gray-400  cursor-pointer hover:border-gray-500 ${darkMode? "bg-transparent hover:bg-gray-900": "bg-gray-100 hover:bg-gray-400"}`}>
                        <div className="flex flex-col">
                            <h1 className="text-xs text-base tracking-wide w-fit truncate">Alison Day</h1>
                            <p className="text-xs">Github</p>
                        </div>
                    </div>
                </Link>
            </footer>
    )
}