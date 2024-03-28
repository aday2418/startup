import Friends from "./Friends";
import userIdFromToken from "../../../lib/userIdFromToken"
import getAllUsersExceptSelf from "../../../lib/getAllUsersExceptSelf"
import getUser from "../../../lib/getUser";

export default async function Page(){
    const userId = userIdFromToken()
    const self = await getUser(userId)
    const { _id, ...userWithoutId } = self
    const allUsers = await getAllUsersExceptSelf(userId)
    const users = allUsers.map(({ _id, ...userWithoutId }) => userWithoutId)


    return(
        <Friends allUsers={users} self={userWithoutId}/>
    )
}