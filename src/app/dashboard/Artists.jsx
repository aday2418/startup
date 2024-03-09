import ArtistRow from "./ArtistRow"
import topArtists from "./topArtists.json"
import Image from 'next/image'
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function Artists({artists}){
    const {darkMode} = useContext(DarkModeContext)

    return(
        <div className="flex flex-col ">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo" firstRow={true}/>
            <div className={`flex w-full mb-3 border-t ${darkMode ? "border-white": "border-gray-900"}  `}></div>
            {topArtists.map((artist, index) => <ArtistRow firstRow={false} number={index+1} artist={artists[index].name} song={artist.mostPlayedSong} picture={<Image width={80} height={80} alt="Artist Image" src={artists[index].images[0].url}/>}/>)}
        </div>
    )
}

//