import React, { useEffect, useState } from 'react'
import "./Banner.css"

const baseUrl = "https://api.themoviedb.org/3"
const posterUrl = "https://image.tmdb.org/t/p/original/"

function Banner({fetchUrl}) {
    const [movie, setMovie] = useState([])
    useEffect(() =>{
        async function fetchData() {
            const Url = baseUrl + fetchUrl
            const response = await fetch(Url);
            const data = await response.json()
            setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)]);
            return response;
        }
        fetchData();

    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }


  return (
    <header className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center"
    }}>
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>
                {truncate(movie?.overview, 160)}
            </h1>
        </div>
        <div className='banner--fadeBottom' />
    </header>
  )
}

export default Banner