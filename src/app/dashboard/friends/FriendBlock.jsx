import Friend from "../../../components/icons/Friend"
import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from "../DarkModeProvider"
import Link from "next/link";
import { UsersOnlineContext } from "../UsersOnlineProvider"

export default function FriendBlock({user, removeFriend}){
    const {darkMode} = useContext(DarkModeContext)
    const { usersOnline } = useContext(UsersOnlineContext)
    const [online, setOnline] = useState(false)
    
    useEffect(() => {
        if (usersOnline.includes(user.username))
            setOnline(true)
        else
            setOnline(false)
    }, [usersOnline]);

    const handleClickX = () => {
        removeFriend(user)
    }


    return(
        <div className='flex flex-col w-[130px] p-3 gap-2 relative group'>
            <div className="absolute right-0">
                <button onClick={handleClickX} className="text-lg font-semibold opacity-0 group-hover:opacity-100 smooth">X</button>
            </div>
            <div className="absolute left-3">
                <div className={`w-[30px] h-[30px] ${online ? "bg-green-500": "bg-gray-500"} border-2 ${darkMode ? "border-white": "border-black"} rounded-full`}/>
            </div>
            <Link href={`/dashboard/friends/${user.username}`}>
                <div className={`border h-[120px] w-[120px] rounded-full overflow-hidden ${darkMode ? "border-white" : "border-black"}`}>
                    {user?.images?.[1]?.url ? <img src={user.images[1].url} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor={""}/>}
                </div>
                <p className="text-center">{user.username}</p>
            </Link>
        </div>
    )
}

//Put this back!!
//The Link Above is only being removed until the database assignment <-- Since the users are fake, the app is breaking trying to load in API data for users that don't have Spotify accounts (In the end the website won't allow users without spotify accounts)

//<Link href={`/dashboard/friends/${user.username}`}>
//</Link>