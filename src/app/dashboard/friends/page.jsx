import Friends from "./Friends";
import userIdFromToken from "../../../lib/userIdFromToken"
import getAllUsersExceptSelf from "../../../lib/getAllUsersExceptSelf"
import getUser from "../../../lib/getUser";

export default async function Page(){
    const userId = userIdFromToken()
    const self = await getUser(userId)
    const { _id, ...userWithoutId } = self
    //self = { ...self, _id: self._id.toString() };
    //delete self._id
    const allUsers = await getAllUsersExceptSelf(userId)
    const users = allUsers.map(({ _id, ...userWithoutId }) => userWithoutId)
    //Do the same thing to get current friends
    //console.log(allUsers)

    return(
        <Friends allUsers={users} self={userWithoutId}/>
    )
}