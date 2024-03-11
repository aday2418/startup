import Friend from "../../../components/icons/Friend"
import { useContext } from "react"
import { DarkModeContext } from "../DarkModeProvider"
import Link from "next/link";

export default function FriendBlock({user, color, removeFriend}){
    const {darkMode} = useContext(DarkModeContext)

    const handleClickX = () => {
        removeFriend(user)
    }

    return(
        <div className='flex flex-col w-[130px] p-3 gap-2 relative group'>
            <div className="absolute right-0">
                <button onClick={handleClickX} className="text-lg font-semibold opacity-0 group-hover:opacity-100 smooth">X</button>
            </div>
            
                <div className={`border rounded-full overflow-hidden ${darkMode ? "border-white" : "border-black"}`}>
                    {user.picture ? <img src={user.picture} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor={user.color}/>}
                </div>
                <p className="text-center">{user.username}</p>
            
        </div>
    )
}

//The Link Above is only being removed until the database assignment <-- Since the users are fake, the app is breaking trying to load in API data for users that don't have Spotify accounts (In the end the website won't allow users without spotify accounts)

//<Link href={`/dashboard/friends/${user.username}`}>
//</Link>