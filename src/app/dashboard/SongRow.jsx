export default function SongRow({number, song, artist, album, picture}){
    return(
        <div className="flex flex-row justify-between p-2">
            <p className="w-[70px]">{number}</p>
            <p className="w-[300px] overflow-x-scroll">{song}</p>
            <p className="w-[250px] overflow-x-scroll">{artist}</p>
            <p className="w-[300px] overflow-x-scroll">{album}</p>
            <p className="w-[250px] overflow-x-scroll">{picture}</p>
        </div>
    )
}