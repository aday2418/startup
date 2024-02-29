import Friend from "@/components/icons/Friend"
import { useContext } from "react"
import { DarkModeContext } from "../DarkModeProvider"
import Link from "next/link";

export default function FriendBlock({user, color}){
    const {darkMode} = useContext(DarkModeContext)

    return(
        <div className='flex flex-col w-[130px] p-3 gap-2'>
            <Link href={`/dashboard/friends/${user.username}`}>
                <div className={`border rounded-full overflow-hidden ${darkMode ? "border-white" : "border-black"}`}>
                    {user.picture ? <img src={user.picture} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor={user.color}/>}
                </div>
                <p className="text-center">{user.username}</p>
            </Link>
        </div>
    )
}