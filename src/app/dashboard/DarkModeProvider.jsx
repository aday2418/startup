"use client"

import { createContext, useState } from "react"

export const DarkModeContext = createContext()


export default function DarkModeProvider({children}){
    //const {data: profile} = await fetch('/api/spotify')
    //console.log(profile)
    const [darkMode, setDarkmode] = useState(false)

    const toggleDarkMode = () => {
        setDarkmode(!darkMode)
    }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}