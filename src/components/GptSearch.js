import React from 'react'

import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_BANNER } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
          <img src={BG_BANNER} alt="bg-img" />
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;