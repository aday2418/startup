import Friend from "@/components/icons/Friend"
import { useContext } from "react"
import { DarkModeContext } from "../DarkModeProvider"

export default function AddFriendBlock({user, addFriend}){
    const handleClick = () => {
        addFriend(user)
    }
    const {darkMode} = useContext(DarkModeContext)

    return(
        <button className='relative flex flex-col w-[130px] p-3 gap-2 items-center' onClick={handleClick} >
            <div className={`border overflow-hidden rounded-full ${darkMode ? "border-white" : "border-black"} h-[100px]`}>
                {user.picture ? <img src={user.picture} alt="Profile" className="h-full w-full object-cover" /> : <Friend fillColor={user.color}/>}
            </div>
            <p className="text-center">{user.username}</p>
        </button>        
    )
}