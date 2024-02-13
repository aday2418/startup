import Image from 'next/image'
import PageInfo from './PageInfo'
import Friend from '@/components/icons/Friend'

export default function Dahsboard() {
  return (
    <PageInfo title="Dashboard">
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row h-[100px] bg-blue-500'>
          <Friend fillColor="#FFFFFF" width={40} height={40} />
          <div>
              <h1 className="text-white text-base tracking-wide w-fit truncate">John Doe</h1>
              <h1 className="text-white text-xs tracking-wide w-fit truncate">username12345</h1>
          </div>
        </div>
        <div className="flex flex-row h-[100px] bg-blue-500 justify-center gap-20">
          <div className='flex'>
            <div className='flex flex-col'>
              <h1>Top Songs</h1>
              <div>
                <p>1. Song 1</p>
                <p>2. Song 2</p>
                <p>3. Song 3</p>
                <p>4. Song 4</p>
                <p>5. Song 5</p>
              </div>
            </div>
            <Image className='object-contain' src="/images/phoebeBridgers.jpeg" width={100} height={100}/>
          </div>
            
          <div className='flex'>
            <div className='flex flex-col'>
                <h1>Top Artists</h1>
                <div>
                  <p>1. Artist 1</p>
                  <p>2. Artist 2</p>
                  <p>3. Artist 3</p>
                  <p>4. Artist 4</p>
                  <p>5. Artist 5</p>
                </div>
              </div>
            <Image className='object-contain' src="/images/somethingInTheOrange.jpeg" width={100} height={100}/>
          </div>
        </div>
        <div className="flex flex-row h-[100px] bg-blue-500 justify-center gap-20">
          <div className='flex'>
            <div className='flex flex-col'>
              <h1>Top Genres</h1>
              <div>
                <p>1. Song 1</p>
                <p>2. Song 2</p>
                <p>3. Song 3</p>
                <p>4. Song 4</p>
                <p>5. Song 5</p>
              </div>
            </div>
            <Image className='object-contain' src="/images/phoebeBridgers.jpeg" width={100} height={100}/>
          </div>
        </div>
      </div>
    </PageInfo> 
  )
}
/*<div>
      <h1>SoundCircle<sup>&reg;</sup></h1>

      <hr />
  
    <main>
      <div>
        <h2>Your Profile</h2>
      </div>
      <table>
        <tr>
          <td>
            <img src="/src/images/profilePicture.svg" alt="Profile Picture" width="100"/>
          </td>
          <td>
            <div class="user">
              <span>Username:</span>
              <span class="user-name">MusicListener22873</span>
            </div>
            <br />
            <div>
              <a href="/src/html/friends.html"> 287 friends </a>
            </div>
          </td>
        </tr>
      </table>
      
      <br />
      <hr />

      <div>
        <h2>Your Listening Stats </h2>
        <h4>39,082 Yearly Minutes</h4>
        <img src="/src/images/lineGraph.jpeg" alt="Listening Graph" />
        <p>**In the final version this will be a line graph of the listening time by month</p>
        <table>
          <tr>
            <td>
              <h4>Top Songs</h4>
              <ol>
                <li>Something in the Orange</li>
                <li>Piano Man</li>
                <li>Stick Season</li>
                <li>Alrighty Aphrodite</li>
                <li>Eye of the Tiger</li>
              </ol>
            </td>
            <td>
              <img src="/src/images/somethingInTheOrange.jpeg" alt="Album Cover" width="150" height="150"/>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>
              <h4> Top Artists</h4>
              <ol>
                <li>Phoebe Bridgers</li>
                <li>Noah Kahan</li>
                <li>Peach Pit</li>
                <li>Zach Bryan</li>
                <li>Hozier</li>
              </ol>
            </td>
            <td>
              <img src="/src/images/phoebeBridgers.jpeg" alt="Artist" width="150" height="150"/>
            </td>
          </tr>
        </table>
        <br/>
        <button type="submit">Refresh All Data From Spotify API</button>
        <p>**In the final version the listening minutes, top songs, and top artists will all come from the spotify API</p>
      </div>
    </main>

    <footer>
      <hr />
      <span class="text-reset">Alison Day</span>
      <br />
      <a href="https://github.com/aday2418/startup">GitHub</a>
    </footer>
    </div>*/