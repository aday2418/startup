import Image from 'next/image'

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

//I will come back and fix the image later -- it was just too hard to find that many pictures to download and use for fake Data 