import GenreChart from "./GenreChart"
export default function Genres({artists, dropdown}){
  const timeRangeArtist = artists[dropdown]
  const genrePercentages = artists[dropdown] ? calculateGenrePercentages(timeRangeArtist).sort((a, b) => b.percentage - a.percentage) : []
    
  function calculateGenrePercentages(artists) {
    let genreCounts = {};
    let totalGenreCount = 0;
  
    artists.forEach(artist => {
      artist.genres.forEach(genre => {
        if (!genreCounts[genre]) {
          genreCounts[genre] = 0;
        }
        genreCounts[genre] += 1;
        totalGenreCount += 1;
      });
    });
  
    let genrePercentages = Object.keys(genreCounts).map(genre => ({
      genre: genre,
      percentage: (genreCounts[genre] / totalGenreCount) * 100
    }));
  
    return genrePercentages.slice(0,15);
  }

  return (
        <GenreChart percentages={genrePercentages}/>
    )
}