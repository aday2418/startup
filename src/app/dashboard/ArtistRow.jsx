export default function ArtistRow({number, song, artist, album, picture}){
    return(
        <div className="flex flex-row justify-between p-2">
            <p className="w-[70px]">{number}</p>
            <p className="w-[400px]">{artist}</p>
            <p className="w-[400px]">{song}</p>
            <p className="w-[200px]">{picture}</p>
        </div>
    )
}