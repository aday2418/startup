export default function SongRow({number, song, artist, album, picture, firstRow}){
    return(
        <div className="flex flex-row justify-between items-center p-2">
                <p className="w-[70px]">{number}</p>
                <p className={`w-[300px] overflow-x-scroll  ${firstRow ? "font-bold text-xl" : "font-semibold text-lg"}`}>{song}</p>
                <p className={`w-[250px] overflow-x-scroll ${firstRow ? "font-bold text-xl" : "font-medium text-md"}`}>{artist}</p>
                <p className={`w-[300px] overflow-x-scroll ${firstRow ? "font-bold text-xl" : "font-medium text-md"}`}>{album}</p>
                <p className={`w-[150px] overflow-x-scroll ${firstRow ? "font-bold text-xl" : "font-medium text-md"}`}>{picture}</p>
        </div>
    )
}
//            <div className={`flex my-2 h-full w-full ${firstRow ? "bg-transparent" : "bg-gray-100"} items-center`}>
