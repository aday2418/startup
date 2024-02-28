"use client"

import { createContext, useState } from "react"

export const DarkModeContext = createContext()


export default function DarkModeProvider({children}){
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