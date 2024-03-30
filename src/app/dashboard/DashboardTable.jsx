import TableTab from './TableTab'
import Songs from './Songs'
import Artists from './Artists'
import Genres from './Genres'

export default function DashboardTable({songs, artists, dropdown, changeTab, tab, darkMode}){
    const songData = songs ? songs.data : []
    const artistData = artists ? artists.data : []
    return(
        <div>
            <div className='flex gap-4 mt-8'> 
            <TableTab name="Top Songs" selected={tab == "songs"} value="songs" changeTab={changeTab}/>
            <TableTab name="Top Artists" selected={tab == "artists"} value="artists" changeTab={changeTab}/>
            <TableTab name="Top Genres" selected={tab == "genres"} value="genres" changeTab={changeTab}/>
            </div>
            <div className={`border rounded-r-2xl p-4 ${darkMode ? "border-white" : "border-black"}`}>
                {tab == "songs" ? <Songs songs={songData} dropdown={dropdown}/> : tab == "artists" ? <Artists songs={songData} artists={artistData} dropdown={dropdown}/> : <Genres artists={artistData} dropdown={dropdown}/>}
            </div>
        </div>
        
    )
}