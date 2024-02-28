import Friend from "@/components/icons/Friend"
import FriendBlock from "./FriendBlock"
import AddFriend from "@/components/icons/AddFriend";

export default function AddFriendGrid({search}){
    
    const allFakeUsersInDatabase = [
        { username: "alphaZone", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "betaSpace1", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "charlieView2", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "deltaSky3", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "echoLake4", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "foxtrotDance5", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "golfField6", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "hotelDream7", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "indiaStory8", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "julietBravo9", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "kiloMeter", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "limaCity", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "mikeEcho", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "novemberRain", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "oscarWin", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "papaBear", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "quebecMaple", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "romeoHeart", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "sierraMountain", picture: <Friend fillColor="#xFFFFFF"/> },
        { username: "tangoDancer", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "uniformCode", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "victorLima", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "whiskeyGlass", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "xrayVision", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "yankeeDoodle", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "zuluWarrior", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "one2Three", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "four5Six", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "seven8Nine", picture: <Friend fillColor="#FFFFFF"/> },
        { username: "zeroHero", picture: <Friend fillColor="#FFFFFF"/> },
    ];

    const filteredUsers = search ? allFakeUsersInDatabase.filter(user => 
        user.username.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 5) : [];

    return(
        <div className='grid grid-cols-5 gap-8 w-full'>
            {search && filteredUsers.length > 0 && filteredUsers.map((friend, index) => (<FriendBlock key={index} username={friend.username} picture={friend.picture}/>))}
        </div>
    )
}
