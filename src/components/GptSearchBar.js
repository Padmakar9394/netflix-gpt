import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: " + searchText.current?.value + ". Only give me 5 names of movies, comma seperated. example result: Gadar, Sholay, Dhol, Dhammal, Hera Pheri";

    const searchMovieTMDB = async (movie) => {
      const response = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&page=1", API_OPTIONS);
      const data = await response.json();

      return data.results;
    }

    const handleGPTSearchClick = async () => {
        //Make an API call to GPT API  to get Movies results
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });

        // console.log(gptResult.choices[0]?.message?.content);
        const gptMovies = gptResult.choices?.[0]?.message?.content.split(", ");
        
        //For each movie i'll search TMDB API
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

        const tmdbResults = await Promise.all(promiseArray);
        // console.log(tmdbResults);
        dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));
    }

  return (
    <div className='pt-[10%]'>
        <form className='w-1/2 grid grid-cols-12 mx-auto px-4 py-6 bg-black my-6' 
              onSubmit={(e) => e.preventDefault()}>
            <input  className="col-span-9 mr-4 px-4 py-3" 
                    type='text' 
                    placeholder={lang[langKey].gptSearchPlaceholder} 
                    ref={searchText}
            />
            <button className="col-span-3 bg-red-600 rounded-lg text-white px-4 py-2"
                    onClick={handleGPTSearchClick}>
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;