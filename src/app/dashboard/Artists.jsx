import ArtistRow from "./ArtistRow"
import topArtists from "./topArtists.json"

export default function Artists(){
    return(
        <div className="flex flex-col">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo"/>
            <div class="w-full border-t border-gray-200"></div>
            {topArtists.map((artist, index) => <ArtistRow number={index+1} artist={artist.artist} song={artist.mostPlayedSong} picture={artist.artistPhoto}/>)}
        </div>
    )
}