import React from 'react'
import { IMG_CDN_URL, MOVIE_POSTER_NOT_FOUND } from '../utils/constants'

const MovieCard = ({poster}) => {
    // console.log(poster);
    const URL = poster ? IMG_CDN_URL + poster : MOVIE_POSTER_NOT_FOUND;
  return (
    <div className="w-48 pr-4">
        <img src={URL} className='w-full h-full' alt='movie-card-img' />
    </div>
  )
}

export default MovieCard