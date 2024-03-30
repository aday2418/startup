import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '../../components/icons/Friend'
import Dropdown from './Dropdown'

export default function DashboardHeader({profile, handleSpotifyLogin, handleDropdownChange, dropdown, darkMode, ownPage}){
    const displayName = profile ? profile.data.display_name : "Please Update Name In Settings"
    const username = profile ? profile.data.username : "Loading..."
    const numFriends = profile ? profile.data.friends.length : 0
    const image = profile?.data?.images?.[1]?.url || null

    return(
        <div className='flex flex-row h-[150px] gap-8'>
            <div className={`flex flex-shrink-0 flex-grow-0 border rounded-full ${darkMode? "border-white" : "border-black"} h-[150px] w-[150px] overflow-hidden items-center`}>
                {image ? <Image src={image} alt="Profile" className="h-full w-full object-cover" width={150} height={150} /> : <Friend fillColor="#FFFFFF"/>}
            </div>
            <div className='flex justify-between w-full items-center pb-8'>
                <div className='flex flex-col'>
                    <div className='flex text-3xl gap-3'>
                    <h1>{displayName}</h1>
                    </div>
                    <p className="text-md ">{username} | {numFriends} Friends</p>
                </div>
                <div className='flex gap-4 flex-col mt-8'>
                {ownPage ? <button onClick={handleSpotifyLogin} className={`flex appearance-none w-full border text-center px-4 py-2 rounded ${darkMode? "border-white hover:bg-gray-800 bg-black " : "border-black bg-gray-200 hover:bg-gray-300 text-black"}`}> Update Spotify API </button> : <p/>}
                <Dropdown dropdown={dropdown} setDropdownChange={handleDropdownChange}/>
                </div>  
            </div>
        </div>
    )
}