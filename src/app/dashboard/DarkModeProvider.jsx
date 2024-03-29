"use client"

import { createContext, useEffect, useState } from "react"
import useSWR from 'swr'
import { fetcher } from "../../lib/fetcher"

export const DarkModeContext = createContext()


export default function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false)
    const { data, isLoading } = useSWR("/api/settings", fetcher)

    useEffect(() => {
        if(data?.data) setDarkMode(data.data)
    }, [data])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}