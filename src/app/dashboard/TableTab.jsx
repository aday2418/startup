"use client"

import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function TableTab({name, selected, value, changeTab}){
    const {darkMode} = useContext(DarkModeContext)
    const handleClick = () => {
        changeTab(value)
    }
    return (
        <button onClick={handleClick} className={`border-t border-l border-r  rounded-t-md p-2 ${selected? darkMode
            ? "border-gray-500 bg-green-900 text-green-200 border-white" // selected + darkMode
            : "border-gray-500 bg-green-200 border-black" // selected + !darkMode
        : darkMode
            ? "border-transparent hover:bg-gray-700 border-white" // !selected + darkMode
            : "border-transparent  hover:bg-gray-200 border-black" // !selected + !darkMode
}`}>{name}</button>
    )
}