import ArtistRow from "./ArtistRow"
import topArtists from "./topArtists.json"
import Image from 'next/image'

export default function Artists(){
    return(
        <div className="flex flex-col ">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo"/>
            <div class="flex w-full border-t border-gray-200 "></div>
            {topArtists.map((artist, index) => <ArtistRow number={index+1} artist={artist.artist} song={artist.mostPlayedSong} picture={<Image width={80} height={80} src="/images/phoebeBridgers.jpeg"/>}/>)}
        </div>
    )
}