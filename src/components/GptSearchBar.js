import React from 'react'
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%]'>
        <form className='w-1/2 grid grid-cols-12 mx-auto px-4 py-6 bg-black my-6'>
            <input className="col-span-9 mr-4 px-4 py-3" type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className="col-span-3 bg-red-600 rounded-lg text-white px-4 py-2">
                {lang[langKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar;