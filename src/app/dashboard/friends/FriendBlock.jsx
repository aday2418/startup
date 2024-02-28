import Friend from "@/components/icons/Friend"
import { useContext } from "react"
import { DarkModeContext } from "../DarkModeProvider"

export default function FriendBlock({username, color}){
    const {darkMode} = useContext(DarkModeContext)
    return(
        <div className='flex flex-col w-[130px] p-3 gap-2'>
            <div className={`border rounded-full ${darkMode ? "border-white" : "border-black"}`}>
                <Friend fillColor={color}/>
            </div>
            <p className="text-center">{username}</p>
            
        </div>
    )
}