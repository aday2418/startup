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
                        <button className="flex items-center border rounded-lg border-white w-[200px] h-[40px] justify-center p-3 hover:bg-gray-700">Change Username</button>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <div>
                            <h1 className='text-3xl'>Spotify Account</h1>
                            <p>spotifyUser12345</p>
                        </div>
                        <button className="flex items-center border rounded-lg border-white justify-center w-[200px] h-[40px] p-3 hover:bg-gray-700">Update Linked Account</button>
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
                <button className='flex items-center border w-[150px] rounded-md border-white justify-center mt-4 p-1 hover:bg-gray-700'>Save Preferences</button>
            </div>
        </div>
    </PageInfo>    
    
    )
}