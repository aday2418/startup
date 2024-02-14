import Friend from "@/components/icons/Friend"
import FriendBlock from "./FriendBlock"

export default function FriendGrid(){
    return(
        <div className='flex flex-col gap-8 w-full'>
                    <div className="flex w-full h-[150px] justify-between">
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>


                    </div>
                    <div className="flex w-full h-[150px] justify-between">
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>
                        <FriendBlock username="user12345" picture={<Friend fillColor="#FFFFFF"/>}/>

                    </div>
                </div>
    )
}