"use client"

import { createContext, useState } from "react"

export const DarkModeContext = createContext()


export default function DarkModeProvider({children, darkMode: darkModePassed}){
    console.log({darkModePassed})
    const [darkMode, setDarkmode] = useState(darkModePassed)

    const toggleDarkMode = () => {
        setDarkmode(!darkMode)
    }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}