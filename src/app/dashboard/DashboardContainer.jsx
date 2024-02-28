"use client"

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";

export default function DashboardContainer({children}){    

    const { darkMode } = useContext(DarkModeContext)

    return(
        <div className={`relative w-full h-screen smooth ${darkMode ? "bg-black text-white":"bg-white text-black"} overflow-hidden`}>
            <Header/>
            <div className="relative flex w-full">
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}