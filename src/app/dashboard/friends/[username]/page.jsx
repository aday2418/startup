import PageInfo from "../../PageInfo";
import FriendDashboard from "./FriendDashboard";
import { mongoClient, mongoCollection } from "../../../../clients/mongo"


export default async function Page({ params: { username }}){
    if(username == 'page')
    {
        return <div>User Not Found</div>
    }
    const client = mongoClient()
    const connection = mongoCollection(client, "users")
    const user = await connection.findOne({username})
    const { _id, ...userWithoutId } = user
    const capitalizedName = user.display_name.charAt(0).toUpperCase() + user.display_name.slice(1)
    await client.close()
    
    return(
        <PageInfo title={`${capitalizedName}'s Dashboard`} backButton={true}>
            <FriendDashboard user={userWithoutId} />
        </PageInfo>
        
    )
}