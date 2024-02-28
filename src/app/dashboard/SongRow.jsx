export default function SongRow({number, song, artist, album, picture}){
    return(
        <div className="flex flex-row justify-between items-center p-2">
            <p className="w-[70px]">{number}</p>
            <p className="w-[300px] overflow-x-scroll text-lg">{song}</p>
            <p className="w-[250px] overflow-x-scroll text-lg">{artist}</p>
            <p className="w-[300px] overflow-x-scroll text-lg">{album}</p>
            <p className="w-[150px] overflow-x-scroll text-lg">{picture}</p>
        </div>
    )
}