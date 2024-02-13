import Image from 'next/image'
import PageInfo from '../PageInfo'
import Friend from '@/components/icons/Friend'
import Row from './Row'
import AddFriend from '@/components/icons/AddFriend'

export default function Friends() {
  return (
        <PageInfo title="Friends">
            <div className='flex flex-col'>
                <h1 className='text-white text-xl mb-2'>My Friends</h1>
                <div className='flex flex-col gap-2'>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<Friend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                </div>
                <h1 className='text-white mt-4 text-xl mb-2'>Add New Friends</h1>
                <div className='flex flex-col gap-2'>
                    <p className='text-white'>Search For Friend By Username: </p>
                    <div className='flex flex-row gap-2 '>
                        <input className='border rounded' type="text" placeholder="Username"/>
                        <button className='bg-green-200 border rounded border-green-200'>Search</button>
                    </div>
                    
                </div>
                <div className='flex flex-col gap-2'>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                    <Row image={<AddFriend fillColor="#FFFFFF"/>} size="h-[30px]" name="User123456"/>
                </div>
            </div>
        </PageInfo> 
    )
}

//Come back and replace the friend SVG with profile pictures

/*    <div>

        <main>
        <h2>Friends</h2>
        <table>
            <tr>
            <td><img src="/src/images/friends.svg" alt="Friend Icon" width="20"/></td>
            <td>JohnyCash2123</td>
            </tr>
            <tr>
            <td><img src="/src/images/friends.svg" alt="Friend Icon" width="20"/></td>
            <td>RockLover2240</td>
            </tr>
            <tr>
            <td><img src="/src/images/friends.svg" alt="Friend Icon" width="20"/></td>
            <td>SoundMixer1231</td>
            </tr>
            <tr>
            <td><img src="/src/images/friends.svg" alt="Friend Icon" width="20"/></td>
            <td>JustinMusic1231</td>
            </tr>
            <tr>
            <td><img src="/src/images/friends.svg" alt="Friend Icon" width="20"/></td>
            <td>ClassicalBangers04</td>
            </tr>
        </table>
        <hr/>
        <h2>Add New Friends</h2>
        <form>
            <div>
            <label for="name">Search For New Friends: </label>
            <span><input type="text" id="friendSearch" placeholder="Enter Friend's Username"/> <button type="submit"> Search </button></span>
            </div>
        </form>
        <br/>
        <table>
            <tr>
                <td><button><img src="/src/images/addFriend.svg" alt="Add Friend Icon" width="20"/></button></td>
                <td> <p>NewFriendToBeAdded23491</p></td>
            </tr>
        </table>
        </main>
        <br/>

        <footer>
        <hr />
        <span class="text-reset">Alison Day</span>
        <br />
        <a href="https://github.com/aday2418/startup">GitHub for SoundCircle</a>
        </footer>
    </div>
*/