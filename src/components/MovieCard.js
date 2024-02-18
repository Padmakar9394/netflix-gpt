import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({poster}) => {
    // console.log(poster);
  return (
    <div className="w-48 pr-4">
        <img src={IMG_CDN_URL + poster} alt='movie-card-img' />
    </div>
  )
}

export default MovieCard