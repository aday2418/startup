import Image from 'next/image'
import PageInfo from '../PageInfo'
import Friend from '@/components/icons/Friend'
export default function Settings() {
  return ( 
    <PageInfo title="Settings">
        <div className='flex flex-col text-white'>
            <div className='flex flex-row h-[200px] gap-8'>
                <div className='flex flex-col'>
                    <div className='border rounded-full'>
                        <Friend fillColor="#FFFFFF"/>
                    </div>
                    <button className='text-sm'>Change Profile Picture</button>
                </div>
                <div className='flex flex-col justify-top w-full gap-4'>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-3xl'>Username</h1>
                            <p>User12345</p>
                        </div>
                        <button className="flex items-center border rounded-md border-white w-[200px] h-[20px] justify-center p-3">Change Username</button>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-3xl'>Spotify Account</h1>
                            <p>spotifyUser12345</p>
                        </div>
                        <button className="flex items-center border rounded-md border-white justify-center w-[200px] h-[20px] p-3">Update Linked Account</button>
                    </div>
                </div>
            </div>
            <h1 className='text-2xl mt-4 mb-4'>Preferences</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 items-center'>
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"/>
                        </label>
                    <p>Dark Mode</p>
                </div>
                <button className='flex items-center border w-[150px] rounded-md border-white justify-center p-1'>Save Preferences</button>
            </div>
        </div>
    </PageInfo>    
    
    )
}
/*<div>
        <h1>SoundCircle<sup>&reg;</sup></h1>

        <hr />
       

        <main>
        <h2>Profile Information</h2>
        <table>
            <tr>
            <td>
                <img src="/src/images/profilePicture.svg" alt="Profile Picture" width="80"/>
            </td>
            <td>
                <span><p>Username: MusicListener22873</p></span>
                <span><p>Password: 12345</p></span>
            </td>
            </tr>
        </table>
        <button type="submit">Update Profile Information</button>
        <hr/>
        <h2>Customization</h2>
        <table>
            <tr>
            <td><p>Dark Mode</p> </td>
            <td><input type="checkbox"/> </td>
            </tr>
        </table>
        <button type="submit">Save Settings</button>
        </main>
        <br/>

        <footer>
        <hr />
        <span class="text-reset">Alison Day</span>
        <br />
        <a href="https://github.com/aday2418/startup">GitHub for SoundCircle</a>
        </footer>
    </div>*/