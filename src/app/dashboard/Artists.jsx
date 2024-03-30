import ArtistRow from "./ArtistRow"
import Image from 'next/image'
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function Artists({songs, artists, dropdown}){
    const {darkMode} = useContext(DarkModeContext)
    const timeRangeArtists = artists[dropdown] ? artists[dropdown] : []
    const slicedArtists = timeRangeArtists.length > 0 ? timeRangeArtists.slice(0, 15) : timeRangeArtists;  

    const findMostPlayedSongByArtist = (artistName) => {
        for (let term of ['short_term', 'medium_term', 'long_term']) {
            const songArray = songs[term]; 
            const song = songArray.find(song => 
                song.artists.some(artist => artist.name === artistName)
            );
            if (song) {
                return song.name; 
            }
        }
        return 'No songs within Top 50'; // Return this if no song matches in any of the terms
    };

    return(
        <div className="flex flex-col ">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo" firstRow={true}/>
            <div className={`flex w-full mb-3 border-t ${darkMode ? "border-white": "border-gray-900"}  `}></div>
            {slicedArtists.length > 0 ? slicedArtists.map((artist, index) => <ArtistRow firstRow={false} number={index+1} artist={artist.name} song={findMostPlayedSongByArtist(artist.name)} picture={<Image width={80} height={80} alt="Artist Image" src={artist.image.url}/>}/>) : <p/>}
        </div>
    )
}

//