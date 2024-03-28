import Settings from "./Settings"
import userIdFromToken from "../../../lib/userIdFromToken"
import getUser from "../../../lib/getUser"


export default async function Page() {  
    const userId = userIdFromToken()
    const user = await getUser(userId)
    const { _id, ...userWithoutId } = user

    return(
        <Settings user={userWithoutId}/>
    ) 
}
