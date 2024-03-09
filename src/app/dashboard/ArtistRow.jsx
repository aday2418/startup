export default function ArtistRow({number, song, artist, picture, firstRow}){
    return(
        <div className="flex flex-row justify-between items-center p-2">
            <p className="w-[70px]">{number}</p>
            <p className={`w-[300px] overflow-x-scroll ${firstRow ? "font-bold text-xl" : "font-semibold text-lg"}`}>{artist}</p>
            <p className={`w-[300px] overflow-x-scroll ${firstRow ? "font-bold text-xl" : "font-medium text-md"}`}>{song}</p>
            <p className={`w-[200px] overflow-x-scroll ${firstRow ? "font-bold text-xl" : "font-medium text-md"}`}>{picture}</p>
        </div>
    )
}