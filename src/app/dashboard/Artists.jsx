import ArtistRow from "./ArtistRow"
export default function Artists(){
    return(
        <div className="flex flex-col">
            <ArtistRow number="" artist="Artist" song="Most Played Song" picture="Artist Photo"/>
            <div class="w-full border-t border-gray-200"></div>
            <ArtistRow number="1" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="2" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="3" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="4" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="5" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="6" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="7" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="8" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="9" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="10" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="11" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="12" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="13" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="14" song="firstSong" artist="firstartist" picture="picture"/>
            <ArtistRow number="15" song="firstSong" artist="firstartist" picture="picture"/>
        </div>
    )
}

/*     
          <div className='flex'>
            <div className='flex flex-col'>
                <h1>Top Artists</h1>
                <div>
                  <p>1. Artist 1</p>
                  <p>2. Artist 2</p>
                  <p>3. Artist 3</p>
                  <p>4. Artist 4</p>
                  <p>5. Artist 5</p>
                </div>
              </div>
            <Image className='object-contain' src="/images/somethingInTheOrange.jpeg" width={100} height={100}/>
          </div>
        </div>*/