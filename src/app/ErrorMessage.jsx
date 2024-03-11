import { useSearchParams } from 'next/navigation';

export default function ErrorMessage(){
    const searchParams = useSearchParams()
    const urlMessage = searchParams.get("message")
    return(
        <div className='flex flex-col items-center justify-center gap-3'>
            {urlMessage == "login" && <h1 className='text-red-500 font-bold'>Please Login Before Accessing The Dashboard</h1>}
            {urlMessage == "login" && <h1 className='flex items-center justify-center text-black-500 font-semibold'>If You Are Having Trouble Logging In Check The Github Link For a Spotify Username + Password That You Can Use</h1>}
            {urlMessage == "login" && <div className='flex flex-col items-center justify-center text-gray-500 font-medium'><h1 >You Wont Be Able To Login With A Personal Spotify Account Until You Are Registered With The Spotify API Since The App Is In Dev Mode</h1> <h1> Send Me A Canvas Message With The Email Linked To Your Spotify And I Will Register You</h1></div>}
        </div>
        
    )
}