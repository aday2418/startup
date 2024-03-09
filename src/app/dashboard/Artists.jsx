import ArtistRow from "./ArtistRow"
import Image from 'next/image'
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function Artists({songs, artists}){
    const {darkMode} = useContext(DarkModeContext)
    const shortArtists = artists.slice(0,15);

    const findMostPlayedSongByArtist = (artistName) => {
        const song = songs.find(song => 
            song.artists.some(artist => artist.name === artistName)
        );
        return song ? song.name : 'No songs within Top 50';
    };

    return(
        <div className="flex flex-col ">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo" firstRow={true}/>
            <div className={`flex w-full mb-3 border-t ${darkMode ? "border-white": "border-gray-900"}  `}></div>
            {shortArtists.map((artist, index) => <ArtistRow firstRow={false} number={index+1} artist={artist.name} song={findMostPlayedSongByArtist(artist.name)} picture={<Image width={80} height={80} alt="Artist Image" src={artist.images[0].url}/>}/>)}
        </div>
    )
}

//