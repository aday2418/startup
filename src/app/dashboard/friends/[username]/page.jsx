import PageInfo from "../../PageInfo";
import UserDashboard from "../../UserDashboard";
import fakeUsers from '../fakeUsers.json'


export default function FriendDashboard({ params: { username }}){
    const user = fakeUsers.find(fakeUser => fakeUser.username == username)
    if (!user) {
        return <div>Loading...</div>; // Or any other placeholder you prefer
      }
    return(
        <PageInfo title={`${user.firstName} ${user.lastName}'s Dashboard`} backButton={true}>
            <UserDashboard user={user} />
        </PageInfo>
        
    )
}