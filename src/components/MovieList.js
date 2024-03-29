import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title, movies}) => {
    // console.log(movies);
  return (
    <div className="">
        <h1 className="py-4 text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-scroll">
            <div className="flex">
                {
                    movies?.map((movie, index) => <MovieCard key={index} poster={movie.poster_path} />)
                }
            </div>
        </div>
    </div>
    
  )
}

export default MovieList;