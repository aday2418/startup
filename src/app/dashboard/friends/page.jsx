import Friends from "./Friends";
import userIdFromToken from "../../../lib/userIdFromToken"
import getAllUsersExceptSelf from "../../../lib/getAllUsersExceptSelf"

export default async function Page(){
    const userId = userIdFromToken()
    const allUsers = await getAllUsersExceptSelf(userId)
    const users = allUsers.map(({ _id, ...userWithoutId }) => userWithoutId)
    //Do the same thing to get current friends
    //console.log(allUsers)

    return(
        <Friends allUsers={users}/>
    )
}