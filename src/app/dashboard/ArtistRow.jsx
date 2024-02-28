import Image from 'next/image'

export default function ArtistRow({number, song, artist, picture}){
    return(
        <div className="flex flex-row justify-between items-center p-2">
            <p className="w-[70px] text-lg">{number}</p>
            <p className="w-[300px] text-lg">{artist}</p>
            <p className="w-[300px] text-lg">{song}</p>
            <p className="w-[200px] text-lg">{picture}</p> 
        </div>
    )
}

//I will come back and fix the image later -- it was just too hard to find that many pictures to download and use for fake Data 