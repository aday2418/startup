import ArtistRow from "./ArtistRow"
import topArtists from "./topArtists.json"
import Image from 'next/image'
import { DarkModeContext } from "./DarkModeProvider"
import { useContext } from "react"

export default function Artists(){
    const {darkMode} = useContext(DarkModeContext)

    return(
        <div className="flex flex-col ">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo" firstRow={true}/>
            <div class={`flex w-full mb-3 border-t ${darkMode ? "border-white": "border-gray-900"}  `}></div>
            {topArtists.map((artist, index) => <ArtistRow firstRow={false} number={index+1} artist={artist.artist} song={artist.mostPlayedSong} picture={<Image width={80} height={80} src="/images/phoebeBridgers.jpeg"/>}/>)}
        </div>
    )
}