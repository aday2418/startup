import SongRow from "./SongRow"
export default function Songs({number, song, artist, album, picture}){
    return(
        <div className="flex flex-col">
            <SongRow number="" song="Song" artist="Artist" album="Album" picture="Album Cover"/>
            <div class="w-full border-t border-gray-200"></div>
            <SongRow number="1" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="2" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="3" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="4" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="5" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="6" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="7" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="8" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="9" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="10" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="11" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="12" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="13" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="14" song="firstSong" artist="firstartist" album="album" picture="picture"/>
            <SongRow number="15" song="firstSong" artist="firstartist" album="album" picture="picture"/>
        </div>
        
        
    )
    
}

/*<div className="flex flex-row h-[100px] bg-blue-500 justify-center gap-20">
          <div className='flex'>
            <div className='flex flex-col'>
              <h1>Top Songs</h1>
              <div>
                <p>1. Song 1</p>
                <p>2. Song 2</p>
                <p>3. Song 3</p>
                <p>4. Song 4</p>
                <p>5. Song 5</p>
              </div>
            </div>
            <Image className='object-contain' src="/images/phoebeBridgers.jpeg" width={100} height={100}/>
          </div>*/