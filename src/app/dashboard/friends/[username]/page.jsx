import PageInfo from "../../PageInfo";
import UserDashboard from "../../UserDashboard";
import fakeUsers from '../fakeUsers.json'


export default function FriendDashboard({ params: { username }}){
    const user = fakeUsers.find(fakeUser => fakeUser.username == username)

    return(
        <PageInfo title={`${user.firstName} ${user.lastName}'s Dashboard`} backButton={true}>
            <UserDashboard user={user} />
        </PageInfo>
        
    )
}