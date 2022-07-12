import movieTrailer from 'movie-trailer'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import "./Row.css"

const baseUrl = "https://api.themoviedb.org/3"
const posterUrl = "https://image.tmdb.org/t/p/original/"

function Row({ title ,fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const Url = baseUrl + fetchUrl
            const response = await fetch(Url);
            const data = await response.json()
            setMovies(data.results);
            return response;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || "")            
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            }).catch((error) => console.log(error));
        }

    }
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
        {movies.map((movie) => (
            <img 
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${posterUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
        ))}

        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row