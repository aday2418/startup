import Friends from "./Friends";
import userIdFromToken from "../../../lib/userIdFromToken"
import getAllUsersExceptSelf from "../../../lib/getAllUsersExceptSelf"
import getUser from "../../../lib/getUser";
import getFriends from "../../../lib/getFriends";

export default async function Page(){
    const userId = userIdFromToken()
    const self = await getUser(userId)
    if(self){
        const { _id, ...userWithoutId } = self
        const allUsers = (await getAllUsersExceptSelf(userId))
        const users = allUsers.map(({ _id, ...userWithoutId }) => userWithoutId)
        const friendUsernames = self.friends
        //console.log(friendUsernames)
        const friends = await getFriends(friendUsernames)
        const friendsWithoutIds = friends.map(({ _id, ...rest }) => rest)

        return(
            <Friends allUsers={users} self={userWithoutId} passedFriends={friendsWithoutIds}/>
        )
    }
    return(
        <div/>
    )
    

    
}